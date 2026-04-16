import "dotenv-flow/config";
import { randomUUID } from "node:crypto";
import {
	AlleviateDebtCore,
	CreditService,
	EligibilityReviewService,
	EnrollmentService,
} from "../src/index.js";
import spinwheelCreditReport from "./spinwheel_credit_report.json" with {
	type: "json",
};

async function main() {
	const { AZURE_CLIENT_ID, AZURE_CLIENT_SECRET } = process.env;

	if (!AZURE_CLIENT_ID || !AZURE_CLIENT_SECRET) {
		throw new Error("AZURE_CLIENT_ID and AZURE_CLIENT_SECRET must be set");
	}

	const client = new AlleviateDebtCore({
		environment: "sandbox",
		auth: {
			clientId: AZURE_CLIENT_ID,
			clientSecret: AZURE_CLIENT_SECRET,
		},
	});

	// ---------------------------------------------------------------------------
	// 1. Credit Service — NormalizeRawReport
	// ---------------------------------------------------------------------------
	const contactId = randomUUID();
	console.log("→ creditService.NormalizeRawReport", { contactId });

	const creditResult = await client.creditService.NormalizeRawReport({
		input: {
			reqOrgContactId: contactId,
			reportType: CreditService.Supported_Report_Products.Spinwheel,
			reportJson: { data: spinwheelCreditReport },
		},
	});

	if (creditResult.normalizeRawReport.errors?.length) {
		console.error("  errors:", creditResult.normalizeRawReport.errors);
		process.exit(1);
	}

	const creditData = creditResult.normalizeRawReport.data;
	console.log("  creditReportId:", creditData?.creditReportId);
	console.log("  debts:", creditData?.debts?.length ?? 0);

	const creditReportId = creditData?.creditReportId;
	if (!creditReportId) {
		console.error("  no creditReportId returned, aborting");
		process.exit(1);
	}

	// ---------------------------------------------------------------------------
	// 2. Eligibility Review — OPENER (basic PII + budget, no employment/banking)
	// ---------------------------------------------------------------------------
	console.log(
		"→ eligibilityReviewService.CheckApplicantEligibilityV2 (OPENER)",
		{ creditReportId },
	);

	const openerResult =
		await client.eligibilityReviewService.CheckApplicantEligibilityV2({
			applicationType: EligibilityReviewService.ApplicationTypeInput.Single,
			flowType: EligibilityReviewService.FlowType.Opener,
			input: {
				primaryReportId: creditReportId,
				leadId: null,
				applicantContactInfo: {
					homeAddress: "22603 CHRISTINE STATION",
					applicantState: "GA",
					ssn: "999887766",
					dob: "1985-06-15",
					phone: "+16575553358",
					cellPhone: "+16575552268",
					firstName: "Clover",
					lastName: "Fandango",
					email: "clover@test.com",
					filedBankruptcy: "NO",
					eligibilityReqMilitary: "NO",
					eligibilityReqCreditCounselling: "NO",
					eligibilityReqBankruptcy: "NO",
					eligibilityReqFederalGovDebt: "NO",
					eligibilityReqSecuredDebt: "NO",
				},
				agentAssigned: "smoke",
				budget: {
					income: {
						gross: 5000,
						business: 0,
						pension: 0,
						otherIncome: 0,
					},
					expenses: {
						housing: 4000,
						transportation: 0,
						personal: 0,
						health: 0,
						groceries: 0,
						misc: 0,
						dependents: 0,
						loans: 0,
						tax: 0,
						involuntary: 0,
						insurance: 0,
						court: 0,
						charitableContributions: 0,
					},
				},
				additionalInfo: {
					debtAmountException: null,
					includeUnacceptableCreditor: null,
					termExtensionException: null,
					standaloneDebtsException: null,
					eomFirstDraftDateException: null,
				},
			},
		});

	if (openerResult.checkApplicantEligibilityV2.errors?.length) {
		console.warn(
			"  warnings:",
			openerResult.checkApplicantEligibilityV2.errors.length,
			"eligibility error(s)",
		);
	}

	const openerData = openerResult.checkApplicantEligibilityV2.data;
	const uwResultId = openerData?.id;
	let uwRevision = openerData?.applicantEligibilityReview?.revision;

	console.log("  uwResultId:", uwResultId);
	console.log("  revision:", uwRevision);
	console.log(
		"  applicantPrequalified:",
		openerData?.applicationEligibilityReview?.applicantPrequalified,
	);
	console.log(
		"  applicationPassable:",
		openerData?.applicationEligibilityReview?.applicationPassable,
	);
	console.log(
		"  totalDebt:",
		openerData?.applicationEligibilityReview?.totalDebt,
	);
	console.log(
		"  totalEligibleDebt:",
		openerData?.applicationEligibilityReview?.totalEligibleDebt,
	);

	if (!uwResultId || !uwRevision) {
		console.error("  missing uwResultId or revision, aborting");
		process.exit(1);
	}

	// ---------------------------------------------------------------------------
	// 3. Offer Service — Generate Offers
	// ---------------------------------------------------------------------------
	const firstPaymentDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
		.toISOString()
		.slice(0, 10);

	console.log("→ offerService.Offers", {
		uwResultId,
		revision: uwRevision,
		firstPaymentDate,
	});

	const offerResult = await client.offerService.Offers({
		input: {
			uwResultId,
			revision: uwRevision,
			firstPaymentDate,
		},
	});

	if (offerResult.offers.errors?.length) {
		console.error("  errors:", offerResult.offers.errors);
		process.exit(1);
	}

	const offers = offerResult.offers.data;
	console.log("  offers:", offers?.length ?? 0);

	const offer = offers?.[0];
	if (!offer) {
		console.error("  no offers returned");
		process.exit(1);
	}

	const [firstPayment, secondPayment] = offer.payments ?? [];
	if (!firstPayment || !secondPayment) {
		console.error("  missing payment schedule");
		process.exit(1);
	}

	console.log("  —", offer.enrollmentPlanName, {
		frequency: offer.frequency,
		firstPaymentAmount: firstPayment.totalPayment,
		secondPaymentAmount: secondPayment.totalPayment,
		firstPaymentDate: firstPayment.paymentDate,
		secondPaymentDate: secondPayment.paymentDate,
		programTerm: offer.paymentTerm,
		feePercentage: offer.serviceFee,
		planId: offer.enrollmentPlanId,
		depositIntervals: offer.frequencyInterval,
	});

	// ---------------------------------------------------------------------------
	// 4. Select Offer — Update eligibility with plan + SaveOffer
	// ---------------------------------------------------------------------------
	console.log(
		"→ eligibilityReviewService.UpdateApplicantEligibilityV2 (select offer)",
		{ uwResultId, revision: uwRevision },
	);

	const selectResult =
		await client.eligibilityReviewService.UpdateApplicantEligibilityV2({
			applicationType: EligibilityReviewService.ApplicationTypeInput.Single,
			updatedUWFields: {
				id: uwResultId,
				revision: uwRevision,
				updatedBy: "smoke",
				applicantContactInfo: {
					applicantState: "GA",
				},
				plan: {
					frequency: offer.frequency,
					firstPaymentAmount: firstPayment.totalPayment
						? parseFloat(firstPayment.totalPayment)
						: undefined,
					secondPaymentAmount: secondPayment.totalPayment
						? parseFloat(secondPayment.totalPayment)
						: undefined,
					firstPaymentDate: firstPayment.paymentDate ?? undefined,
					secondPaymentDate: secondPayment.paymentDate ?? undefined,
					programTerm: offer.paymentTerm
						? parseInt(offer.paymentTerm, 10)
						: undefined,
					feePercentage: offer.serviceFee ?? undefined,
					planId: offer.enrollmentPlanId ?? undefined,
					depositIntervals: offer.frequencyInterval ?? undefined,
				},
			},
		});

	if (selectResult.updateApplicantEligibilityV2.errors?.length) {
		console.warn(
			"  warnings:",
			selectResult.updateApplicantEligibilityV2.errors.length,
			"eligibility error(s)",
		);
	}

	const selectData = selectResult.updateApplicantEligibilityV2.data;
	uwRevision = selectData?.applicantEligibilityReview?.revision ?? uwRevision;
	console.log("  revision:", uwRevision);

	// SaveOffer
	console.log("→ offerService.SaveOffer", {
		uwResultId,
		revision: uwRevision,
	});

	const saveOfferResult = await client.offerService.SaveOffer({
		input: {
			uwResultId,
			revision: uwRevision,
		},
	});

	if (saveOfferResult.saveOffer.errors?.length) {
		console.error("  errors:", saveOfferResult.saveOffer.errors);
		process.exit(1);
	}

	const savedOffer = saveOfferResult.saveOffer.data;
	if (!savedOffer) {
		console.error("  no saved offer returned");
		process.exit(1);
	}

	uwRevision = savedOffer.uwResultRevision ?? uwRevision;
	console.log("  savedOfferId:", savedOffer.id);
	console.log("  enrollmentPlanName:", savedOffer.enrollmentPlanName);
	console.log("  revision:", uwRevision);

	// ---------------------------------------------------------------------------
	// 5. Eligibility Review — FULL_REVIEW (all info: employment + banking)
	// ---------------------------------------------------------------------------
	console.log(
		"→ eligibilityReviewService.UpdateApplicantEligibilityV2 (FULL_REVIEW)",
		{ uwResultId, revision: uwRevision },
	);

	const fullReviewResult =
		await client.eligibilityReviewService.UpdateApplicantEligibilityV2({
			applicationType: EligibilityReviewService.ApplicationTypeInput.Single,
			flowType: EligibilityReviewService.FlowType.FullReview,
			updatedUWFields: {
				id: uwResultId,
				revision: uwRevision,
				updatedBy: "smoke",
				applicantContactInfo: {
					homeAddress: "22603 CHRISTINE STATION",
					applicantState: "GA",
					employerName: "ACME CORPORATION",
					jobTitle: "Analyst",
					hardship: "Loss Of Employment",
					routingNumber: "99999999",
					bankName: "Bells Fargo",
					bankAccountNumber: "1121214",
					bankAccountHolderName: "Clover",
					bankAccountType: "Checking",
				},
				budget: {
					income: {
						gross: 5000,
						business: 0,
						pension: 0,
						otherIncome: 0,
					},
					expenses: {
						housing: 4000,
						transportation: 0,
						personal: 0,
						health: 0,
						groceries: 0,
						misc: 0,
						dependents: 0,
						loans: 0,
						tax: 0,
						involuntary: 0,
						insurance: 0,
						court: 0,
						charitableContributions: 0,
					},
				},
				plan: {
					frequency: offer.frequency,
					firstPaymentAmount: firstPayment.totalPayment
						? parseFloat(firstPayment.totalPayment)
						: undefined,
					secondPaymentAmount: secondPayment.totalPayment
						? parseFloat(secondPayment.totalPayment)
						: undefined,
					firstPaymentDate: firstPayment.paymentDate ?? undefined,
					secondPaymentDate: secondPayment.paymentDate ?? undefined,
					programTerm: offer.paymentTerm
						? parseInt(offer.paymentTerm, 10)
						: undefined,
					feePercentage: offer.serviceFee ?? undefined,
					planId: offer.enrollmentPlanId ?? undefined,
					depositIntervals: offer.frequencyInterval ?? undefined,
				},
			},
		});

	if (fullReviewResult.updateApplicantEligibilityV2.errors?.length) {
		console.warn(
			"  warnings:",
			fullReviewResult.updateApplicantEligibilityV2.errors.length,
			"eligibility error(s)",
		);
	}

	const fullReviewData = fullReviewResult.updateApplicantEligibilityV2.data;
	console.log("  uwResultId:", fullReviewData?.id);
	console.log(
		"  revision:",
		fullReviewData?.applicantEligibilityReview?.revision,
	);
	console.log(
		"  applicantPrequalified:",
		fullReviewData?.applicationEligibilityReview?.applicantPrequalified,
	);
	console.log(
		"  applicationPassable:",
		fullReviewData?.applicationEligibilityReview?.applicationPassable,
	);

	// ---------------------------------------------------------------------------
	// 6. Enrollment Service — CreateEnrollment
	// ---------------------------------------------------------------------------
	console.log("→ enrollmentService.CreateEnrollment", {
		ogId: savedOffer.id,
	});

	const enrollmentResult = await client.enrollmentService.CreateEnrollment({
		input: {
			ogId: savedOffer.id,
			leadId: `smoke-${contactId}`,
			contactInfo: {
				jobClassification: EnrollmentService.JobClassification.W_2,
			},
		},
	});

	if (enrollmentResult.createEnrollment.errors?.length) {
		console.warn(
			"  enrollment errors (non-fatal, may need Alleviate investigation):",
			enrollmentResult.createEnrollment.errors,
		);
	}

	const enrollmentData = enrollmentResult.createEnrollment.data;
	console.log("  enrollmentId:", enrollmentData?.enrollmentId ?? "(none)");

	console.log("✓ smoke passed");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});

import "dotenv-flow/config";
import { randomUUID } from "node:crypto";
import {
	AlleviateDebtCore,
	CreditService,
	EligibilityReviewService,
} from "../src/index.js";
import cloverCreditReport from "./clover_credit_report.json" with {
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
	// Credit Service — NormalizeRawReport
	// ---------------------------------------------------------------------------
	const contactId = randomUUID();
	console.log("→ creditService.NormalizeRawReport", { contactId });

	const creditResult = await client.creditService.NormalizeRawReport({
		input: {
			reqOrgContactId: contactId,
			reportType:
				CreditService.Supported_Report_Products.CrsStandardPrequalVantage4,
			reportJson: cloverCreditReport,
		},
	});

	if (creditResult.normalizeRawReport.errors?.length) {
		console.error("  errors:", creditResult.normalizeRawReport.errors);
		process.exit(1);
	}

	const creditData = creditResult.normalizeRawReport.data;
	console.log("  creditReportId:", creditData?.creditReportId);
	console.log("  debts:", creditData?.debts?.length ?? 0);

	// ---------------------------------------------------------------------------
	// Eligibility Review Service — CheckApplicantEligibilityV2
	// ---------------------------------------------------------------------------
	const creditReportId = creditData?.creditReportId;
	if (!creditReportId) {
		console.error("  no creditReportId returned, skipping eligibility step");
		process.exit(1);
	}

	console.log("→ eligibilityReviewService.CheckApplicantEligibilityV2", {
		creditReportId,
	});

	const uwResult =
		await client.eligibilityReviewService.CheckApplicantEligibilityV2({
			applicationType: EligibilityReviewService.ApplicationTypeInput.Single,
			input: {
				primaryReportId: creditReportId,
				leadId: null,
				applicantContactInfo: {
					// employerName: "ACME CORPORATION",
					homeAddress: "22603 CHRISTINE STATION",
					applicantState: "GA",
					ssn: "999887766",
					dob: "1985-06-15",
					phone: "+16575553358",
					cellPhone: "+16575552268",
					firstName: "Clover",
					lastName: "Fandango",
					// jobTitle: "Analyst",
					email: "clover@test.com",
					// hardship: "Loss Of Employment",
					filedBankruptcy: "NO",
					// routingNumber: "99999999",
					// bankName: "Bells Fargo",
					// bankAccountNumber: "1121214",
					// bankAccountHolderName: "Clover",
					// bankAccountType: "Checking",
					eligibilityReqMilitary: "NO",
					eligibilityReqCreditCounselling: "NO",
					eligibilityReqBankruptcy: "NO",
					eligibilityReqFederalGovDebt: "NO",
					eligibilityReqSecuredDebt: "NO",
				},
				agentAssigned: "agent",
				// plan: {
				//   frequency: "M",
				//   firstPaymentAmount: 400,
				//   secondPaymentAmount: 400,
				//   firstPaymentDate: "2026-03-03",
				//   firstDraftException: null,
				//   programTerm: 40,
				//   feePercentage: 27,
				//   epfReduction: null,
				//   secondPaymentDate: "2026-03-24",
				//   planId: "42445",
				//   depositIntervals: "23",
				//   includeSentryFee: true,
				// },
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
		},
	);

	if (uwResult.checkApplicantEligibilityV2.errors?.length) {
		console.warn(
			"  warnings:",
			uwResult.checkApplicantEligibilityV2.errors.length,
			"eligibility error(s)",
		);
	}

	const uwData = uwResult.checkApplicantEligibilityV2.data;
	console.log("  uwResultId:", uwData?.id);
	console.log(
		"  applicantPrequalified:",
		uwData?.applicationEligibilityReview?.applicantPrequalified,
	);
	console.log("  totalDebt:", uwData?.applicationEligibilityReview?.totalDebt);
	console.log(
		"  totalEligibleDebt:",
		uwData?.applicationEligibilityReview?.totalEligibleDebt,
	);

	// ---------------------------------------------------------------------------
	// Offer Service — Offers
	// ---------------------------------------------------------------------------
	const uwResultId = uwData?.id;
	let uwRevision = uwData?.applicantEligibilityReview?.revision;
	if (!uwResultId || !uwRevision) {
		console.error("  missing uwResultId or revision, skipping offer step");
		process.exit(1);
	}

	console.log("→ offerService.Offers", { uwResultId, revision: uwRevision });

	const offerResult = await client.offerService.Offers({
		input: {
			uwResultId,
			revision: uwRevision,
			firstPaymentDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
				.toISOString()
				.slice(0, 10)
				.replace(/-/g, "/"),
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
		firstDraftException: null,
		programTerm: offer.paymentTerm,
		feePercentage: offer.serviceFee,
		epfReduction: null,
		planId: offer.enrollmentPlanId,
		depositIntervals: offer.frequencyInterval,
		includeSentryFee: null,
	});

	// ---------------------------------------------------------------------------
	// Eligibility Review Service — UpdateApplicantEligibilityV2
	// ---------------------------------------------------------------------------
	console.log("→ eligibilityReviewService.UpdateApplicantEligibilityV2", {
		uwResultId,
		revision: uwRevision,
	});

	const updateResult =
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
					firstPaymentDate: firstPayment.paymentDate?.replace(/-/g, "/"),
					secondPaymentDate: secondPayment.paymentDate?.replace(/-/g, "/"),
					programTerm: offer.paymentTerm
						? parseInt(offer.paymentTerm, 10)
						: undefined,
					feePercentage: offer.serviceFee,
					planId: offer.enrollmentPlanId,
					depositIntervals: offer.frequencyInterval,
				},
			},
		});

	if (updateResult.updateApplicantEligibilityV2.errors?.length) {
		console.warn(
			"  warnings:",
			updateResult.updateApplicantEligibilityV2.errors.length,
			"eligibility error(s)",
		);
	}

	const updateData = updateResult.updateApplicantEligibilityV2.data;
	uwRevision = updateData?.applicantEligibilityReview?.revision ?? uwRevision;
	console.log("  uwResultId:", updateData?.id);
	console.log("  revision:", uwRevision);
	console.log(
		"  applicantPrequalified:",
		updateData?.applicationEligibilityReview?.applicantPrequalified,
	);

	// ---------------------------------------------------------------------------
	// Eligibility Review Service — UpdateApplicantEligibilityV2 (contact info)
	// ---------------------------------------------------------------------------
	console.log(
		"→ eligibilityReviewService.UpdateApplicantEligibilityV2 (contact info)",
		{ uwResultId, revision: uwRevision },
	);

	const updateContactResult =
		await client.eligibilityReviewService.UpdateApplicantEligibilityV2({
			applicationType: EligibilityReviewService.ApplicationTypeInput.Single,
			updatedUWFields: {
				id: uwResultId,
				revision: uwRevision,
				updatedBy: "smoke",
				applicantContactInfo: {
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
			},
		});

	if (updateContactResult.updateApplicantEligibilityV2.errors?.length) {
		console.warn(
			"  warnings:",
			updateContactResult.updateApplicantEligibilityV2.errors.length,
			"eligibility error(s)",
		);
	}

	const updateContactData =
		updateContactResult.updateApplicantEligibilityV2.data;
	uwRevision =
		updateContactData?.applicantEligibilityReview?.revision ?? uwRevision;
	console.log("  revision:", uwRevision);
	console.log(
		"  applicantPrequalified:",
		updateContactData?.applicationEligibilityReview?.applicantPrequalified,
	);

	// ---------------------------------------------------------------------------
	// Offer Service — SaveOffer
	// ---------------------------------------------------------------------------
	console.log("→ offerService.SaveOffer", { uwResultId, revision: uwRevision });

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

	console.log("  savedOfferId:", savedOffer.id);
	console.log("  enrollmentPlanName:", savedOffer.enrollmentPlanName);

	console.log("✓ smoke passed");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});

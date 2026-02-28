import "dotenv-flow/config";
import { randomUUID } from "crypto";
import { AlleviateDebtCore, CreditService, UnderwritingService } from "../src/index.js";
import spinwheel from "./spinwheel.json" with { type: "json" };

async function main() {
  const client = new AlleviateDebtCore({
    environment: "sandbox",
    auth: {
      clientId: process.env.AZURE_CLIENT_ID!,
      clientSecret: process.env.AZURE_CLIENT_SECRET!,
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
      reportType: CreditService.Supported_Report_Products.Spinwheel,
      reportJson: { data: spinwheel },
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
  // Underwriting Service — CheckApplicantEligibilityV2
  // ---------------------------------------------------------------------------
  const creditReportId = creditData?.creditReportId;
  if (!creditReportId) {
    console.error("  no creditReportId returned, skipping UW step");
    process.exit(1);
  }

  console.log("→ underwritingService.CheckApplicantEligibilityV2", { creditReportId });

  const uwResult = await client.underwritingService.CheckApplicantEligibilityV2({
    applicationType: UnderwritingService.ApplicationTypeInput.Single,
    input: {
      primaryReportId: creditReportId,
      leadId: null,
      applicantContactInfo: {
        firstName: "Bugs",
        lastName: "Bunny",
        dob: "1940-07-27",
        ssn: "999999999",
        phone: "+15555550123",
        cellPhone: "+15555550123",
        homeAddress: "123 Carrot Lane, Toon Town, CA 90210",
        applicantState: "CA",
        employerName: "ACME CORPORATION",
        jobTitle: "Analyst",
        email: "clover@test.com",
        hardship: "Loss Of Employment",
        filedBankruptcy: "NO",
        routingNumber: "99999999",
        bankName: "Bells Fargo",
        bankAccountNumber: "1121214",
        bankAccountHolderName: "Bugs Bunny",
        bankAccountType: "Checking",
        eligibilityReqMilitary: "NO",
        eligibilityReqCreditCounselling: "NO",
        eligibilityReqBankruptcy: "NO",
        eligibilityReqFederalGovDebt: "NO",
        eligibilityReqSecuredDebt: "NO",
      },
      agentAssigned: "agent",
      plan: {
        frequency: "M",
        firstPaymentAmount: 400,
        secondPaymentAmount: 400,
        firstPaymentDate: "2026-03-03",
        firstDraftException: null,
        programTerm: 40,
        feePercentage: 27,
        epfReduction: null,
        secondPaymentDate: "2026-03-24",
        planId: "42445",
        depositIntervals: "23",
        includeSentryFee: true,
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
      additionalInfo: {
        debtAmountException: null,
        includeUnacceptableCreditor: null,
        termExtensionException: null,
        standaloneDebtsException: null,
        eomFirstDraftDateException: null,
      },
    },
  });

  if (uwResult.checkApplicantEligibilityV2.errors?.length) {
    console.warn("  warnings:", uwResult.checkApplicantEligibilityV2.errors.length, "eligibility error(s)");
  }

  const uwData = uwResult.checkApplicantEligibilityV2.data;
  console.log("  uwResultId:", uwData?.id);
  console.log("  applicantPrequalified:", uwData?.applicationUwResult?.applicantPrequalified);
  console.log("  totalDebt:", uwData?.applicationUwResult?.totalDebt);
  console.log("  totalEligibleDebt:", uwData?.applicationUwResult?.totalEligibleDebt);

  console.log("✓ smoke passed");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

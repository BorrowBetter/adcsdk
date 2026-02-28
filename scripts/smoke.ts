import "dotenv-flow/config";
import { randomUUID } from "crypto";
import { AlleviateDebtCore, CreditService } from "../src/index.js";
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

  const result = await client.creditService.NormalizeRawReport({
    input: {
      reqOrgContactId: contactId,
      reportType: CreditService.Supported_Report_Products.Spinwheel,
      reportJson: { data: spinwheel },
    },
  });

  if (result.normalizeRawReport.errors?.length) {
    console.error("  errors:", result.normalizeRawReport.errors);
    process.exit(1);
  }

  const data = result.normalizeRawReport.data;
  console.log("  creditReportId:", data?.creditReportId);
  console.log("  debts:", data?.debts?.length ?? 0);
  console.log("✓ smoke passed");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

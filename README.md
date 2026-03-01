# @borrowbetter/adcsdk

TypeScript SDK for the Alleviate DebtCore platform. Wraps the GraphQL APIs for credit, underwriting, offer, and enrollment services with automatic Azure AD authentication and full type safety.

## Installation

```bash
npm install @borrowbetter/adcsdk
```

## Requirements

- Node.js >= 18
- Azure AD client credentials (provided by your Alleviate account manager)

## Quick Start

```typescript
import { AlleviateDebtCore } from "@borrowbetter/adcsdk";

const client = new AlleviateDebtCore({
  environment: "sandbox", // or "production"
  auth: {
    clientId: process.env.AZURE_CLIENT_ID,
    clientSecret: process.env.AZURE_CLIENT_SECRET,
  },
});
```

## Services

All four services are accessed as properties on the client instance:

```typescript
client.creditService
client.underwritingService
client.offerService
client.enrollmentService
```

### Credit Service

Normalizes raw credit reports from various vendors.

```typescript
const result = await client.creditService.NormalizeRawReport({
  input: {
    reqOrgContactId: contactId,
    reportType: CreditService.Supported_Report_Products.CrsStandardPrequalVantage4,
    reportJson: rawCreditReportJson,
  },
});

const { creditReportId, debts } = result.normalizeRawReport.data;
```

Supported report types are available via the `CreditService` namespace export.

### Underwriting Service

Evaluates applicant eligibility and manages underwriting results.

```typescript
// Check eligibility
const uwResult = await client.underwritingService.CheckApplicantEligibilityV2({
  applicationType: UnderwritingService.ApplicationTypeInput.Single,
  input: {
    primaryReportId: creditReportId,
    applicantContactInfo: { ... },
    budget: { income: { ... }, expenses: { ... } },
    additionalInfo: { ... },
  },
});

const { id: uwResultId, revision } = uwResult.checkApplicantEligibilityV2.data;

// Update with plan selection or contact info
const updateResult = await client.underwritingService.UpdateApplicantEligibilityV2({
  applicationType: UnderwritingService.ApplicationTypeInput.Single,
  updatedUWFields: {
    id: uwResultId,
    revision,
    updatedBy: "agent",
    plan: { ... },
  },
});
```

Updates use revision-based optimistic locking — always pass the current `revision` and use the updated one returned from each call.

### Offer Service

Generates payment plan offers and persists the selected one.

```typescript
// Generate offers
const offerResult = await client.offerService.Offers({
  input: {
    uwResultId,
    revision,
    firstPaymentDate: "2026/03/15",
  },
});

const offers = offerResult.offers.data;

// Save selected offer
const saved = await client.offerService.SaveOffer({
  input: { uwResultId, revision },
});

const { id: savedOfferId } = saved.saveOffer.data;
```

### Enrollment Service

Creates enrollments for qualified applicants.

```typescript
const enrollment = await client.enrollmentService.CreateEnrollment({
  input: {
    leadId,
    ogId: savedOfferId,
    contactInfo: { ... },
  },
});
```

## Configuration

```typescript
const client = new AlleviateDebtCore({
  // Required
  environment: "sandbox" | "production",
  auth: {
    clientId: string,
    clientSecret: string,
  },

  // Optional
  headers?: Record<string, string>,  // Static headers added to every request
  timeout?: number,                  // Request timeout in ms (default: 30_000)
  tokenCache?: TokenCache,           // Custom token cache (see below)
});
```

### Custom Token Cache

By default tokens are cached in memory. For multi-process deployments (e.g. serverless, multiple workers) provide a shared cache implementation:

```typescript
import { AlleviateDebtCore, type TokenCache } from "@borrowbetter/adcsdk";

class RedisTokenCache implements TokenCache {
  async get(key: string) { ... }
  async set(key: string, value: string, ttlSeconds: number) { ... }
}

const client = new AlleviateDebtCore({
  environment: "production",
  auth: { clientId, clientSecret },
  tokenCache: new RedisTokenCache(),
});
```

### Raw Client Access

If you need direct access to the underlying `graphql-request` clients:

```typescript
client.rawCreditServiceClient
client.rawUnderwritingServiceClient
client.rawOfferServiceClient
client.rawEnrollmentServiceClient
```

## Error Handling

All operations return a consistent `{ data, errors }` shape:

```typescript
const result = await client.creditService.NormalizeRawReport({ input });

if (result.normalizeRawReport.errors?.length) {
  console.error(result.normalizeRawReport.errors);
  return;
}

const data = result.normalizeRawReport.data;
```

## Type Exports

Each service's generated types are available as namespace exports:

```typescript
import {
  AlleviateDebtCore,
  CreditService,
  UnderwritingService,
  OfferService,
  EnrollmentService,
  type DebtCoreConfig,
  type TokenCache,
} from "@borrowbetter/adcsdk";

// Use namespaced enums and types
const reportType = CreditService.Supported_Report_Products.CrsStandardPrequalVantage4;
const appType = UnderwritingService.ApplicationTypeInput.Single;
```

## Development

### Setup

```bash
npm install
npm run dev      # codegen + tsup watch (runs codegen first to generate types)
```

Generated files (`__generated__/sdk.ts`) are excluded from source control and regenerated at build time.

### Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Codegen + compile to `dist/` |
| `npm run dev` | Watch mode (codegen + tsup) |
| `npm run codegen` | Regenerate TypeScript from GraphQL schemas |
| `npm run smoke` | Run end-to-end smoke test against sandbox |
| `npm run lint` | Biome lint check |
| `npm run format` | Biome format + auto-fix |
| `npm run format:check` | Biome CI check (no writes) |
| `npm run typecheck` | TypeScript type check |

### Smoke Test

The smoke test exercises the full flow against the sandbox environment:

```bash
cp .env.example .env.local  # add AZURE_CLIENT_ID and AZURE_CLIENT_SECRET
npm run smoke
```

### Adding a New Service

1. Place the SDL schema at `src/schemas/{service-name}/schema.graphql`
2. Add operations under `src/schemas/{service-name}/operations/`
3. Add the service name to the `SERVICES` array in `codegen.ts`
4. Wire up the new client in `AlleviateDebtCore.ts`
5. Export the namespace from `src/index.ts`
6. Run `npm run codegen`

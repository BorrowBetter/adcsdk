export type DebtCoreEnvironment = "sandbox" | "production";

export const CONFIG = {
  sandbox: {
    tenantId: "8797fa3f-ba90-4187-97fb-6ab892ea9035",
    debtCoreAppId: "aba793eb-f395-4f86-be59-7a7d0c1bfdb0",
    endpoints: {
      creditService: "https://debt-core-api-sandbox.alleviate.com/credit-service/graphql",
      underwritingService: "https://debt-core-api-sandbox.alleviate.com/underwriting-service/graphql",
      offerService: "https://debt-core-api-sandbox.alleviate.com/og-service/graphql",
      enrollmentService: "https://debt-core-api-sandbox.alleviate.com/enrollment-service/graphql",
    },
  },
  production: {
    tenantId: "8797fa3f-ba90-4187-97fb-6ab892ea9035",
    debtCoreAppId: "9060a1d0-da3b-4676-ad64-ff64465cce41",
    endpoints: {
      creditService: "https://debt-core-api.alleviate.com/credit-service/graphql",
      underwritingService: "https://debt-core-api.alleviate.com/underwriting-service/graphql",
      offerService: "https://debt-core-api.alleviate.com/og-service/graphql",
      enrollmentService: "https://debt-core-api.alleviate.com/enrollment-service/graphql",
    },
  },
} as const;

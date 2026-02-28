import { GraphQLClient } from "graphql-request";
import { CONFIG } from "./config.js";
import { AzureAuthProvider, InMemoryTokenCache } from "./auth.js";
import type { DebtCoreConfig, DebtCoreHeaders } from "./types.js";

import { getSdk as getCreditServiceSdk } from "./schemas/credit-service/__generated__/sdk.js";
import { getSdk as getUnderwritingServiceSdk } from "./schemas/underwriting-service/__generated__/sdk.js";
import { getSdk as getOfferServiceSdk } from "./schemas/offer-service/__generated__/sdk.js";
import { getSdk as getEnrollmentServiceSdk } from "./schemas/enrollment-service/__generated__/sdk.js";

/**
 * AlleviateDebtCore — main entry point for the AlleviateDebt Core SDK.
 *
 * @example
 * ```ts
 * const client = new AlleviateDebtCore({
 *   environment: "sandbox",
 *   auth: {
 *     clientId: process.env.AZURE_CLIENT_ID,
 *     clientSecret: process.env.AZURE_CLIENT_SECRET,
 *   },
 * });
 *
 * const result = await client.creditService.NormalizeRawReport({
 *   input: { reqOrgContactId: "123", reportType: "SPINWHEEL", reportJson: { data: {} } },
 * });
 * ```
 */
export class AlleviateDebtCore {
  private readonly authProvider: AzureAuthProvider;
  private readonly staticHeaders: Record<string, string>;
  private readonly timeout: number;

  private readonly creditServiceClient: GraphQLClient;
  private readonly underwritingServiceClient: GraphQLClient;
  private readonly offerServiceClient: GraphQLClient;
  private readonly enrollmentServiceClient: GraphQLClient;

  public readonly creditService: ReturnType<typeof getCreditServiceSdk>;
  public readonly underwritingService: ReturnType<typeof getUnderwritingServiceSdk>;
  public readonly offerService: ReturnType<typeof getOfferServiceSdk>;
  public readonly enrollmentService: ReturnType<typeof getEnrollmentServiceSdk>;

  constructor(config: DebtCoreConfig) {
    this.staticHeaders = config.headers ?? {};
    this.timeout = config.timeout ?? 30_000;

    const { tenantId, debtCoreAppId, endpoints } = CONFIG[config.environment];

    this.authProvider = new AzureAuthProvider({
      clientId: config.auth.clientId,
      clientSecret: config.auth.clientSecret,
      tenantId,
      scope: `api://${debtCoreAppId}/.default`,
      cache: config.auth.cache ?? new InMemoryTokenCache(),
    });

    this.creditServiceClient = this.buildClient(endpoints.creditService);
    this.underwritingServiceClient = this.buildClient(endpoints.underwritingService);
    this.offerServiceClient = this.buildClient(endpoints.offerService);
    this.enrollmentServiceClient = this.buildClient(endpoints.enrollmentService);

    this.creditService = getCreditServiceSdk(this.creditServiceClient);
    this.underwritingService = getUnderwritingServiceSdk(this.underwritingServiceClient);
    this.offerService = getOfferServiceSdk(this.offerServiceClient);
    this.enrollmentService = getEnrollmentServiceSdk(this.enrollmentServiceClient);
  }

  // ------------------------------------------------------------------
  // Raw client access for advanced / escape-hatch usage
  // ------------------------------------------------------------------

  get rawCreditServiceClient(): GraphQLClient {
    return this.creditServiceClient;
  }

  get rawUnderwritingServiceClient(): GraphQLClient {
    return this.underwritingServiceClient;
  }

  get rawOfferServiceClient(): GraphQLClient {
    return this.offerServiceClient;
  }

  get rawEnrollmentServiceClient(): GraphQLClient {
    return this.enrollmentServiceClient;
  }

  // ------------------------------------------------------------------
  // Internal helpers
  // ------------------------------------------------------------------

  private buildClient(endpoint: string): GraphQLClient {
    const timeout = this.timeout;
    return new GraphQLClient(endpoint, {
      fetch: async (url, options) => {
        const token = await this.authProvider.getToken();
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeout);
        return fetch(url as string, {
          ...options,
          headers: {
            ...Object.fromEntries(new Headers(options?.headers)),
            ...this.staticHeaders,
            Authorization: `Bearer ${token}`,
            "apollo-require-preflight": "1",
          },
          signal: controller.signal,
        }).finally(() => clearTimeout(timer));
      },
    });
  }
}

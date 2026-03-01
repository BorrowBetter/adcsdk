import type { TokenCache } from "./auth.js";
import type { DebtCoreEnvironment } from "./config.js";

export type { DebtCoreEnvironment, TokenCache };

export interface AzureAuthConfig {
	/**
	 * Azure AD application (client) ID — provided by your Alleviate account manager.
	 */
	clientId: string;

	/**
	 * Azure AD client secret — provided by your Alleviate account manager.
	 */
	clientSecret: string;

	/**
	 * Token cache implementation.
	 * Defaults to in-memory — suitable for single-process deployments.
	 * Provide a custom implementation (e.g. Redis) for multi-process setups.
	 *
	 * @example
	 * ```ts
	 * cache: {
	 *   get: () => redis.get("adc:token"),
	 *   set: (token, expiresAt) => redis.set("adc:token", token, { exAt: expiresAt }),
	 * }
	 * ```
	 */
	cache?: TokenCache;
}

export interface DebtCoreConfig {
	/**
	 * Target environment. Determines endpoints, tenant ID, and API app ID.
	 */
	environment: DebtCoreEnvironment;

	/**
	 * Azure AD client credentials for automatic token acquisition and refresh.
	 * Tenant ID and API app ID are resolved automatically from the environment.
	 */
	auth: AzureAuthConfig;

	/**
	 * Additional static headers merged into every request.
	 */
	headers?: Record<string, string>;

	/**
	 * Request timeout in milliseconds. Defaults to 30_000.
	 */
	timeout?: number;
}

export type DebtCoreHeaders = Record<string, string>;

/**
 * Token cache interface — implement this to plug in your own cache
 * (e.g. Redis, a database, or any shared store for multi-process deployments).
 *
 * The default implementation is in-memory, suitable for single-process use.
 */
export interface TokenCache {
	/** Return a valid cached token, or null if none exists / token has expired. */
	get(): string | null | Promise<string | null>;
	/** Store a token along with its expiry time. */
	set(token: string, expiresAt: Date): void | Promise<void>;
}

/** Default in-memory cache. Fine for single-process; does not survive restarts. */
export class InMemoryTokenCache implements TokenCache {
	private token: string | null = null;
	private expiresAt: Date | null = null;

	get(): string | null {
		if (!this.token || !this.expiresAt) return null;
		if (new Date() >= this.expiresAt) {
			this.token = null;
			this.expiresAt = null;
			return null;
		}
		return this.token;
	}

	set(token: string, expiresAt: Date): void {
		this.token = token;
		this.expiresAt = expiresAt;
	}
}

interface AzureTokenResponse {
	access_token: string;
	expires_in: number; // seconds until expiry
	token_type: string;
}

export interface AzureAuthProviderConfig {
	clientId: string;
	clientSecret: string;
	tenantId: string;
	scope: string;
	cache: TokenCache;
}

/** Handles Azure AD client credentials token acquisition and caching. */
export class AzureAuthProvider {
	private readonly config: AzureAuthProviderConfig;

	constructor(config: AzureAuthProviderConfig) {
		this.config = config;
	}

	async getToken(): Promise<string> {
		const cached = await this.config.cache.get();
		if (cached) return cached;
		return this.fetchToken();
	}

	private async fetchToken(): Promise<string> {
		const { clientId, clientSecret, tenantId, scope, cache } = this.config;
		const url = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

		const body = new URLSearchParams({
			grant_type: "client_credentials",
			client_id: clientId,
			client_secret: clientSecret,
			scope,
		});

		const response = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: body.toString(),
		});

		if (!response.ok) {
			const text = await response.text();
			throw new Error(
				`Azure AD token request failed (${response.status}): ${text}`,
			);
		}

		const data = (await response.json()) as AzureTokenResponse;

		// Subtract 60s from expiry as a safety buffer
		const expiresAt = new Date(Date.now() + (data.expires_in - 60) * 1_000);
		await cache.set(data.access_token, expiresAt);

		return data.access_token;
	}
}

import type { CodegenConfig } from "@graphql-codegen/cli";

/**
 * Codegen config for all service schemas.
 *
 * Each service gets its own generates entry so types stay isolated.
 * Schema source: local SDL files at src/schemas/{service}/schema.graphql
 * (introspection is disabled on the API endpoints)
 *
 * To update a schema, get the SDL from the backend team and place it at:
 *   src/schemas/credit-service/schema.graphql
 *   src/schemas/underwriting-service/schema.graphql
 *   src/schemas/offer-service/schema.graphql
 *   src/schemas/enrollment-service/schema.graphql
 *
 * Usage:
 *   npm run codegen         # generate all
 *   npm run codegen:watch   # watch mode
 */

const SERVICES = [
	"credit-service",
	"underwriting-service",
	"offer-service",
	"enrollment-service",
] as const;

const generates = Object.fromEntries(
	SERVICES.map((name) => [
		`src/schemas/${name}/__generated__/sdk.ts`,
		{
			schema: `src/schemas/${name}/schema.graphql`,
			documents: `src/schemas/${name}/operations/**/*.graphql`,
			plugins: [
				"typescript",
				"typescript-operations",
				"typescript-graphql-request",
			],
			config: {
				rawRequest: false,
				useTypeImports: true,
				scalars: { JSON: "unknown", Date: "number" },
			},
		},
	]),
);

const config: CodegenConfig = {
	ignoreNoDocuments: true,
	generates,
};

export default config;

import type { CodegenPlugin } from "@graphql-codegen/plugin-helpers";
import { plugin } from "@graphql-codegen/schema-ast";

module.exports = {
    async plugin(schema, documents, config) {
        const res = await plugin(schema, documents, config);
        // biome-ignore lint/style/useTemplate: <explanation>
        return 'export const typeDefs = `#graphql\n' + res + '`;';
    },
} satisfies CodegenPlugin;

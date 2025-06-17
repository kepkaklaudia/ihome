import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "./graphql.schema.json": {
      schema: [
        `${process.env.MAGENTO_URL}/graphql`,
        "./lib/graphql/custom/*.graphqls"
      ],
      plugins: ["introspection"]
    }
  }
};

export default config;

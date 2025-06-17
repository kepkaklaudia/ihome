import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  watch: true,
  generates: {
    "./gql/": {
      schema: "./graphql.schema.json",
      documents: ["./**/*.graphql"],
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: false
      }
    },
    "./gql/fragments.json": {
      schema: "./graphql.schema.json",
      documents: ["./**/*.graphql"],
      plugins: ["fragment-matcher"],
      config: {
        module: "commonjs"
      }
    }
  }
};

export default config;

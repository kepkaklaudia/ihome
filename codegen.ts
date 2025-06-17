import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  watch: true,
  schema: [`${process.env.MAGENTO_URL}/graphql`],
  documents: [
    "./**/*.tsx",
    "./**/*.ts",
    "./graphql/fragments/*.graphql",
    "!./__generated__/**/*.*",
    "!./gql/**/*.*",
    "!./operations/**/*.*"
  ],

  generates: {
    // Here we generate queries, fragments, etc
    "./__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql", //nazwa głównej zmiennej od której odpytujemy o endpointy
        fragmentMasking: false
      },
      plugins: ["typescript", "typescript-operations"]
    },

    //here schema
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;

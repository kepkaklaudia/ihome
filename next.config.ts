import type { NextConfig } from "next";
import withNextIntl from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: [`${process.env.MAGENTO_URL}`],
  },
  rewrites: async () => [
    {
      //configurator backend
      source: "/api/:path*",
      destination: "http://localhost:4001/:path*",
    },
    {
      //magento graphql endpoint
      source: "/graphql/:path*",
      destination: `https://${process.env.MAGENTO_URL}/graphql/:path*`,
    },
  ],
};

export default withNextIntl("./lib/i18n/request.ts")({
  webpack(config) {
    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules.push(
      {
        test: /\.svg$/,
        resourceQuery: /icon/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              dimensions: false,
              svgProps: {
                height: "100%",
                preserveAspectRatio: "xMidYMid meet",
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        resourceQuery: { not: /icon/ },
        use: ["@svgr/webpack"],
      }
    );

    return config;
  },
  // Other Next.js configuration ...
  ...nextConfig,
});

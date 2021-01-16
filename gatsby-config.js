module.exports = {
  siteMetadata: {
    title: "Delaney's Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "e0_uGbjhV6l_wKLag_a3RoqW_d4esTJ8_kkgQ1PRGJU",
        spaceId: "h9kxs8r5gc5c",
      },
    },
    "gatsby-plugin-postcss",
  ],
};

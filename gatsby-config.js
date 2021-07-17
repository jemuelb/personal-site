module.exports = {
  siteMetadata: {
    title: "jemuelb",
  },
  plugins: [
      "gatsby-plugin-gatsby-cloud",
      "gatsby-plugin-emotion",
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
          resolve: "gatsby-source-filesystem",
          options: {
              name: `blog`,
              path: `${__dirname}/blog`,
          }
      },
  ],
};

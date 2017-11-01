module.exports = {
  siteMetadata: {
    title: `Jason Wortley Forums`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-react-helmet`
  ],
};

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.rei.dev",
    title: "Rei Dev",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `Roboto\:300,400,400i,700` // you can also specify font weights and styles
        ]
      }
    }
  ],
};

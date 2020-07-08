module.exports = {
  siteMetadata: {
    title: `Turismo en Yucatán`,
    description: `Blog de viajes para conocer el estado de Yucatán, México`,
    titleTemplate: `%s | TYucatan`,
    url: `https://tyucatan.com/`,
    image: `mainImg.png`,
    twitterUsername: `@turistamexico`,
  },
  plugins: [
    // `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-leaflet',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          { resolve: "gatsby-remark-images" },
          {resolve: `gatsby-remark-embedder`},
          
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `yucatanturismo`,
      },
    },
    `gatsby-plugin-meta-redirect`, //Este debe de estar al último
  ],
}

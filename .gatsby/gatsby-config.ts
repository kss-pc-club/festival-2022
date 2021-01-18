const siteTitle = `Festival`;
const siteUrl = `https://festival.kss-pc.club`;
const siteDescription = `Web pages for school festivals`;
const backgroundColor = `#09090f`;
const themeColor = `#15171a`;
const siteFavicon = `content/assets/favicon.png`;
const siteDefaultOgpImage = `/images/ogp_default.png`;

const siteMetadata = {
  title: siteTitle,
  titleTemplate: `%s | ${siteTitle}`,
  siteTitleAlt: `Web pages for school festivals`,
  siteHeadline: `Web pages for school festivals`,
  siteUrl: siteUrl,
  description: siteDescription,
  siteLanguage: `ja`,
  siteDefaultOgpImage,
  author: `Koga Secondary School - PC Club`,
  basePath: `/`,
  social: {
    github: `kss-pc-club`,
  },
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-lodash`,
    /*
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`,
      },
    },
    */
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@pages": "src/pages",
          "@styles": "src/styles",
          "@utils": "src/utils",
        },
        extensions: ["js", "jsx", "ts", "tsx"],
      }
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        Scope: `/`,
        start_url: `/?utm_source=homescreen`,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: `minimal-ui`,
        icon: siteFavicon,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
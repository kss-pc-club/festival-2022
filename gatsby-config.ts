import type { GatsbyConfig } from 'gatsby'

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

const config: GatsbyConfig = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-root-import`,
    /*
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`,
      },
    },
    */
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

export default config
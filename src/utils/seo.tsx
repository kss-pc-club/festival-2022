import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

const SEO: React.FC<any> = ({ description, image, title }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            siteLanguage
            author
            defaultDescription: description
            siteUrl
            siteDefaultOgpImage
          }
        }
      }
    `
  );
  
  const {
    defaultTitle,
    titleTemplate,
    siteUrl,
    defaultDescription,
    siteLanguage,
    siteDefaultOgpImage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || siteDefaultOgpImage}`,
    lang: siteLanguage,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang={seo.lang} />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property='og:image:alt' content={seo.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name='twitter:image:alt' content={seo.description} />
    </Helmet>
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
  image: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
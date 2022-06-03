import { PageProps } from 'gatsby'
import React from 'react'

import Layout from "src/components/layout"
import SEO from "src/utils/seo"
import Hero from "src/components/organisms/hero"


const TopPage: React.FC<PageProps> = ({ location }) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <SEO title="Top" />
        <Hero />
      </Layout>
    </React.Fragment>
  )
}

export default TopPage
import React from "react"
import { PageProps } from "gatsby"
import Layout from "@components/layout"
import SEO from "@utils/seo"

const TopPage: React.FC<PageProps> = ({ location }) => {
  return (
    <React.Fragment>
      <Layout>
        <SEO title="Top" />
        <h1>Hi people</h1>
        <p>This is a website for school festival.</p>
        <p>But WIP...</p>
      </Layout>
    </React.Fragment>
  )
}

export default TopPage
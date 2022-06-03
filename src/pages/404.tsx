import React from "react"
import { Link, PageProps } from "gatsby"
import Layout from "src/components/layout"
import SEO from "src/utils/seo"

const NotFoundPage: React.FC<PageProps> = ({ location }) => (
  <React.Fragment>
    <Layout>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <p>申し訳ありません。一時的にアクセスが出来ない状況にあるか、もしくは移動、削除され見つけることができません。</p>
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <Link to="/">Topへ戻る</Link>
    </Layout>
  </React.Fragment>
)

export default NotFoundPage
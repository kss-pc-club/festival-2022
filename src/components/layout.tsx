import React from 'react'

import Footer from 'src/components/organisms/footer'
import Header from 'src/components/organisms/header'

const Layout: React.FC<any> = (Props) => {
  const isRootPath = Props.location.pathname === `${__PATH_PREFIX__}/`
  return (
    <React.Fragment>
      {isRootPath ? <header></header> : <Header />}
      <main className={Props.styles}>{Props.children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
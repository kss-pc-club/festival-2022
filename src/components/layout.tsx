import React from 'react'

import Footer from 'src/components/organisms/footer'
import Header from 'src/components/organisms/header'

const Layout: React.FC<any> = (Props) => {
  return (
    <React.Fragment>
      <Header />
      <main className={Props.styles}>{Props.children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
import { PageProps } from 'gatsby'
import React from 'react'

import Layout from "src/components/layout"
import SEO from "src/utils/seo"
import Hero from "src/components/organisms/hero"

import Container from 'src/components/organisms/container'

import { StaticImage } from 'gatsby-plugin-image';

import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Header = styled.div`
  h1 {

  }
  h3 {

  }
  padding-bottom: 10px;
  margin-bottom: 40px;
  border-bottom: 1px solid #aaa;
`

const BookCover = styled.div`
  text-align: center;
`

const Button = styled.a`
  display: block;
  margin-top: 20px;
  padding: 10px;
  background-color: white;
  border: 1px solid #228bc8;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  transition-duration: .2s;
  &:hover {
    background-color: #228bc8;
    color: white;
  }
`

const TopPage: React.FC<PageProps> = ({ location }) => {
  return (
    <React.Fragment>
      <Layout location={location}>
        <SEO title="Top" />
        <Hero />
        <Container margin="50px auto">
          <Header>
            <h1>KSS PC Book 2022</h1>
            <h3>2022 年度部誌</h3>
          </Header>
          <BookCover>
            <StaticImage
              src='https://github.com/kss-pc-club/book-2022/blob/main/assets/cover.png?raw=true'
              alt='kss-pc-book-2022'
              placeholder='blurred'
              layout='constrained'
              height={650}
              css={css`
                box-shadow: 5px 5px 10px rgb(75, 75, 75);
              `}
            />
          </BookCover>
          <BookCover>
            <Button href='https://repos.kss-pc.club/book-2022/book-v.pdf'>PDF で読む</Button>
          </BookCover>
        </Container>
      </Layout>
    </React.Fragment>
  )
}

export default TopPage
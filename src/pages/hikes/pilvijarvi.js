import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BackgroundImage from "gatsby-background-image"

const HeaderImage = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "pilvijarvi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      fluid={data.header.childImageSharp.fluid}
      className={className}
    ></BackgroundImage>
  )
}

const Pilvijarvi = () => {
  return (
    <Layout>
      <SEO title="Pilvijärvi Hike" />
      <TitleWrapper>
        <Title>Pilvijärvi</Title>
        <Subtitle>
          Follow a well-marked trail and take a dip in the pretty cloud lake
        </Subtitle>
      </TitleWrapper>
      <StyledHeaderImage />
      <FactSection>
        <IntroBox>Welcome to Pilvijärvi</IntroBox>
        <FactBox>Here are facts</FactBox>
      </FactSection>
    </Layout>
  )
}

const IntroBox = styled.div`
  font-size: 1em;
  margin: 1em;
`

const FactBox = styled.div`
  width: 5em;
  height: 3em;
  background: grey;
  margin: 1em;
`

const FactSection = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

const TitleWrapper = styled.div`
  max-width: 90%;
  margin: 2em 2em 0 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 0.4em;
`

const Subtitle = styled.p`
  font-size: 1em;
  text-align: left;
`

const StyledHeaderImage = styled(HeaderImage)`
  height: 20vh;
`

export default Pilvijarvi

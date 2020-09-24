import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "home.jpg" }) {
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
      fluid={data.hero.childImageSharp.fluid}
      className={className}
    >
      <StyledInnerWrapper>{children}</StyledInnerWrapper>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;

  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    var(--image-url) center center;
  background-size: cover;
`

const StyledInnerWrapper = styled.div`
  color: white;
  margin: 0 auto;
  position: relative;
  width: 90%;
`

export default StyledBackgroundSection

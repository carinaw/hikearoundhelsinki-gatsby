import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import MapboxGLMap from "../components/map2"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Badge from "../components/badge"
import SEO from "../components/seo"
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    contentfulHikePage(slug: { eq: $slug }) {
      title
      subtitle {
        subtitle
      }
      introDescription {
        introDescription
      }
      gettingThereTitle
      generalTitle
      otherThingsTitle
      aboutTitle
      detailsBox
      tags
      headerImage {
        title
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid
        }
      }
      aboutTrail {
        json
      }
      general {
        json
      }
      gettingThere {
        json
      }
      otherThings {
        json
      }
    }
  }
`

const HikePage = props => {
  return (
    <Layout>
      <SEO title="Pilvijärvi Hike" />
      <Header>
        <TitleWrapper>
          <Title>{props.data.contentfulHikePage.title}</Title>
          <Subtitle>{props.data.contentfulHikePage.subtitle.subtitle}</Subtitle>
        </TitleWrapper>
        {props.data.contentfulHikePage.headerImage && (
          <StyledHeaderImage
            fluid={props.data.contentfulHikePage.headerImage.fluid}
            alt={props.data.contentfulHikePage.headerImage.title}
          />
        )}
      </Header>
      <FactSection>
        <IntroBox>
          <p>
            {props.data.contentfulHikePage.introDescription.introDescription}
          </p>
          <Badges>
            {props.data.contentfulHikePage.tags.map(tag => {
              return <Badge>{tag}</Badge>
            })}
          </Badges>
        </IntroBox>
        <FactBox>
          <p>
            <ul>
              {props.data.contentfulHikePage.detailsBox.map(detail => {
                return <li id="where">{detail}</li>
              })}
            </ul>
          </p>
        </FactBox>
      </FactSection>
      <ContentSection>
        <MapSection />
        <ContentBox>
          <ContentHeader>
            {props.data.contentfulHikePage.generalTitle}
          </ContentHeader>
          {documentToReactComponents(
            props.data.contentfulHikePage.general.json
          )}
        </ContentBox>
        <ContentBox>
          <ContentHeader>
            {props.data.contentfulHikePage.aboutTitle}
          </ContentHeader>
          {documentToReactComponents(
            props.data.contentfulHikePage.aboutTrail.json
          )}
        </ContentBox>
        <ContentBox>
          <ContentHeader>
            {props.data.contentfulHikePage.gettingThereTitle}
          </ContentHeader>
          {documentToReactComponents(
            props.data.contentfulHikePage.gettingThere.json
          )}
        </ContentBox>
        <ContentBox>
          <ContentHeader>
            {props.data.contentfulHikePage.otherThingsTitle}
          </ContentHeader>
          {documentToReactComponents(
            props.data.contentfulHikePage.otherThings.json
          )}
        </ContentBox>
      </ContentSection>
    </Layout>
  )
}

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: "Caveat";
  font-size: 1.2em;
`

const MapSection = styled(MapboxGLMap)`
  max-width: 90%;
`

const ContentHeader = styled.h2`
  font-size: 1.5em;
  text-align: left;
  font-family: "Fjalla One";
`
const ContentBox = styled.div`
  margin: 1em auto -2em auto;
  padding: 1em;
  width: 90%;

  p {
    text-align: left;
  }
`

const ContentSection = styled.div`
  max-width: 90%;
  display: flex;
  margin: 0 auto 2em auto;
  flex-direction: column;
`

const IntroBox = styled.div`
  font-size: 1em;
  margin: 1em 1em 0 auto;
  flex: 00 55%;

  p {
    text-align: left;
  }
`

const FactBox = styled.div`
  background: hsla(42, 100%, 70%, 0.5);
  margin: 1em auto;
  flex: 1;
  width: 100%;
  position: relative;
  display: inline-block;

  p {
    position: relative;
    margin: 0 auto;
    padding: 2em 1em;
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li#where::before {
    content: "🗺";
  }

  li#distance::before {
    content: "🥾";
  }

  li#duration::before {
    content: "⏱";
  }
`

const FactSection = styled.div`
  max-width: 90%;
  margin: 1em auto 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;

  @media only screen and (min-width: 500px) {
    flex-direction: row;
  }
`

const TitleWrapper = styled.div`
  margin: 2em 2em 0 0em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h1`
  font-size: 2.3em;
  margin-bottom: 0.4em;
`

const Subtitle = styled.p`
  font-size: 1em;
  text-align: left;
`

const StyledHeaderImage = styled(Img)`
  height: 40vh;
`

const Header = styled.div`
  max-width: 90%;
  margin: 0 auto;
`
export default HikePage

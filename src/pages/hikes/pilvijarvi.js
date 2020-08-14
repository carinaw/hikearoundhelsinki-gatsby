import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import MapboxGLMap from "../../components/map2"

import Layout from "../../components/layout"
import Badge from "../../components/badge"
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
      <Header>
        <TitleWrapper>
          <Title>Pilvijärvi</Title>
          <Subtitle>
            Follow a well-marked trail and take a dip in the pretty cloud lake
          </Subtitle>
        </TitleWrapper>
        <StyledHeaderImage />
      </Header>
      <FactSection>
        <IntroBox>
          <p>
            Welcome to Pilvijärvi, a perfect destination for 5 or 10km hike or
            run, and a jump into the scenic, lovely lake.
          </p>
          <Badges>
            <Badge></Badge>
            <Badge></Badge>
          </Badges>
        </IntroBox>
        <FactBox>
          <p>
            <ul>
              <li id="where"> Where: Sipoo, Uusimaa</li>
              <li id="distance"> Trail distance: 5km or 10km</li>
              <li id="duration"> Duration: 1-3 hours</li>
            </ul>
          </p>
        </FactBox>
      </FactSection>
      <ContentSection>
        <MapSection />
        <ContentBox>
          <ContentHeader>About the trail</ContentHeader>
          <p>
            Lake Pilvijärvi holds a nature reserve and a popular bathing beach,
            where you can cool off on a hot summer’s day. Parts of the nature
            trail that go around the lake are covered with duckboards to keep
            your feet dry during the one-hour walk. There are perfect spots for
            a hikers’ picnic on top of the cliffs overlooking the beautiful
            lake.
          </p>
        </ContentBox>
        <ContentBox>
          <ContentHeader>The hiking trail</ContentHeader>
          <p>
            The great thing about Pilvijärvi is that the routs are very well
            marked. You have to option to choose between two routs. A 5 km hike
            or a 10 km hike. The great thing about Pilvijärvi is that the routs
            are very well marked. You have to option to choose between two
            routs. A 5 km hike or a 10 km hike.
          </p>
          <p>
            Lake Pilvijärvi holds a nature reserve and a popular bathing beach,
            where you can cool off on a hot summer’s day. Parts of the nature
            trail that go around the lake are covered with duckboards to keep
            your feet dry during the one-hour walk. There are perfect spots for
            a hikers’ picnic on top of the cliffs overlooking the beautiful
            lake.
          </p>
        </ContentBox>
        <ContentBox>
          <ContentHeader>How to get there</ContentHeader>
          <p>With your car: 25 min sdfadsfasdfasdfasdf</p>
          <p>With public transport: 1 hour sdfasdfasdfasdf</p>
        </ContentBox>
        <ContentBox>
          <ContentHeader>Other things to do</ContentHeader>
          <p>
            🏖️ Beach - if you don't want to go for a hike you can simply relax
            and spend the day on the beach{" "}
          </p>
          <p>
            🥏 Frisbeegolf - Do you want to combine your hike with some
            balabdsflblabsdf
          </p>{" "}
          <p>🔥 BBQ - there are various grilling spots all around the lake</p>
        </ContentBox>
      </ContentSection>
    </Layout>
  )
}

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const MapSection = styled(MapboxGLMap)`
  max-width: 90%;
`

const ContentHeader = styled.h2`
  font-size: 1.5em;
  text-align: left;
  font-family: "DroidSerif";
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

const StyledHeaderImage = styled(HeaderImage)`
  height: 40vh;
`

const Header = styled.div`
  max-width: 90%;
  margin: 0 auto;
`

export default Pilvijarvi

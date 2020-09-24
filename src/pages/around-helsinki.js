import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import "../styles/styles.css"
import Layout from "../components/layout"

const AroundHelsinki = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulHikePage {
          edges {
            node {
              title
              id
              slug
              subtitle {
                subtitle
              }
              headerImage {
                fluid(maxWidth: 400) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Hike around Helsinki | Helsinki's best hiking trails & nature spots" />
      <Header>
        <TitleWrapper>
          <Title>Hikes around Helsinki</Title>
          <Subtitle>
            Even within Helsinki the nature is always close. But if you're up
            for the real outdoors flair, you might want to do some research.
          </Subtitle>
        </TitleWrapper>
        <HikesWrapper>
          <ul>
            {data.allContentfulHikePage.edges.map(hike => {
              return (
                <Hike key="id">
                  {hike.node.headerImage && (
                    <Img
                      fluid={hike.node.headerImage.fluid}
                      alt={hike.node.title}
                    />
                  )}
                  <h2>
                    <HikeLink to={`/wanderungen/${hike.node.slug}/`}>
                      {hike.node.title}
                    </HikeLink>
                  </h2>
                  <p>{hike.node.subtitle.subtitle}</p>
                </Hike>
              )
            })}
          </ul>
        </HikesWrapper>
      </Header>
    </Layout>
  )
}

const Hike = styled.li`
  width: 300px;

  list-style: none;
  text-align: left;
  margin: 0 1em;

  p {
    line-height: 1.5em;
    margin-top: 0px;
  }

  h2 {
    margin-bottom: 0.5em;
  }
`

const HikeLink = styled(Link)`
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #073b4c;
  }

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  font-family: "Fjalla One";
`

const HikesWrapper = styled.div`
  max-width: 100%;
  margin: 2em auto;
  display: flex;
  flex-wrap: wrap;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
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

const Header = styled.div`
  max-width: 90%;
  margin: 0 auto;
`

export default AroundHelsinki

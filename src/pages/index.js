import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import "../components/layout.css"
import "../styles/styles.css"

import Layout from "../components/layout"
import Destinations from "../components/destinations"
import TextBox from "../components/textbox"
import MapboxGLMap from "../components/map2"
import StyledBackgroundSection from "../components/hero-background"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledBackgroundSection>
      <Title>Hike around Helsinki</Title>
      <SubTitle>& beyond</SubTitle>
    </StyledBackgroundSection>
    <TextBox />
    <MapboxGLMap />
    <Destinations />
  </Layout>
)

const Title = styled.h1`
  font-size: 7rem;
  margin: 1.4rem 1rem;
  font-family: "LeagueGothic", sans-serf;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  @media only screen and (max-width: 500px) {
    font-size: 5em;
  }

  @media only screen and (max-width: 320px) {
    font-size: 4em;
  }
`

const SubTitle = styled.h2`
  font-size: 3rem;
  margin: 1rem 1rem;
  font-family: "LeagueGothic", sans-serf;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  @media only screen and (max-width: 500px) {
    font-size: 2em;
  }

  @media only screen and (max-width: 320px) {
    font-size: 1.5em;
  }
`

export default IndexPage

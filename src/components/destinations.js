import React from "react"
import styled from "styled-components"
import Cards from "./cards"
import "../styles/styles.css"

const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin: 2em auto 0 auto;
  flex-direction: column;
`

const SectionHeader = styled.h1`
  font-size: 1.85em;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 1rem 2rem 1rem;

  a {
    margin: 2rem;
  }
`

const Destinations = () => {
  return (
    <Wrapper>
      <SectionHeader>Latest adventures</SectionHeader>
      <CardWrapper>
        <Cards />
      </CardWrapper>
    </Wrapper>
  )
}

export default Destinations

import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  height: 24rem;
  background-image: url("images/home.jpg");
`

const Title = styled.h1`
  font-size: 4rem;
  margin: 1rem 1rem;
`

const SubTitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 1rem;
`

const Hero = ({ siteTitle }) => {
  return (
    <Wrapper>
      <div>
        <Title>Hike around Helsinki</Title>
      </div>
      <div>
        <SubTitle>& beyond</SubTitle>
      </div>
    </Wrapper>
  )
}

export default Hero

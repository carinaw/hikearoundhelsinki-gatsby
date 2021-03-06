import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 3rem 0;
  line-height: 1.75em;
  font-size: 1.1em;

  @media only screen and (max-width: 320px) {
    width: 85%;
  }

  @media only screen and (max-width: 600px) {
    width: 85%;
    padding: 2rem 0;
  }
`

const Text = styled.p`
  font-size: 1em;
  margin: 0 auto;
`

const SectionHeader = styled.h1`
  font-size: 1.85em;
  font-family: "Fjalla One";

  @media only screen and (max-width: 320px) {
    font-size: 1.5em;
  }
`

const TextBox = () => {
  return (
    <Wrapper>
      <SectionHeader>About</SectionHeader>
      <Text>
        <p>
          Two outdoorsy Helsinki residents decided that finding hiking
          destinations close to Helsinki was too hard. Therefore, your
          Finnish-Austrian creators bring to you: Hike around Helsinki. Taking
          Austrian tourism expertise and the Finnish love of nature, Hike around
          Helsinki started.
        </p>{" "}
        <p>
          On Hike around Helsinki, you'll find hikes and outdoor locations
          around the Helsinki area – and beyond. Start hiking today!
        </p>
      </Text>
    </Wrapper>
  )
}

export default TextBox

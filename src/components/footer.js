import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  background: #073b4c;
  padding: 2em;
`

const FooterItem = styled.p`
  font-size: 1rem;
  margin: 1rem 1rem;
  color: white;

  a {
    color: white;
  }
  a:hover {
    opacity: 0.7;
    cursor: initial;
  }
`

const Footer = ({ siteTitle }) => {
  return (
    <Wrapper>
      <FooterItem>
        Made with{" "}
        <span role="img" aria-label="coffee">
          ☕️
        </span>{" "}
        and{" "}
        <span role="img" aria-label="heart">
          💛
        </span>{" "}
        in Helsinki {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </FooterItem>
    </Wrapper>
  )
}

export default Footer

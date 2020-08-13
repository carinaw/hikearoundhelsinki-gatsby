import React from "react"
import styled from "styled-components"
import Logo from "../images/logo.png"
import { Link } from "gatsby"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  padding: 0.75em;
`

const NavbarItem = styled(Link)`
  font-size: 1.2em;
  margin: 1rem 2rem;

  @media only screen and (max-width: 321px) {
    font-size: 0.4em;
    margin: 1rem 1rem;
  }

  @media only screen and (max-width: 415px) {
    font-size: 1.2em;
    margin: 1rem 0.2rem;
  }

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
`

const NavImg = styled.img`
  max-width: 3rem;
  margin: 0.5em 1em;
`

const Nav = ({ siteTitle }) => {
  return (
    <Wrapper>
      <NavbarItem to="">Helsinki</NavbarItem>

      <Link to="/">
        <NavImg src={Logo} />
      </Link>

      <NavbarItem to="">Beyond</NavbarItem>
    </Wrapper>
  )
}

export default Nav

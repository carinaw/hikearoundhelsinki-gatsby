import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const Badge = props => {
  return (
    <Box>
      <Text>{props.children}</Text>
    </Box>
  )
}

const Box = styled.div`
  background: #06D6A0;
  border-radius: 50px;
  padding: 0.5em 1em;
  display: table;
  margin: 0.2em; 0.2em;
`

const Text = styled.p`
  color: white;
  padding: 0em;
  margin: 0 auto;
  float: right;
`

export default Badge

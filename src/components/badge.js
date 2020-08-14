import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const Badge = () => {
  return (
    <Box>
      <Icon icon={faCoffee} />
      <Text>Wonderful wizard</Text>
    </Box>
  )
}

const Box = styled.div`
  background: #06d6a0;
  border-radius: 50px;
  padding: 0.5em 1em;
  display: table;
  margin: 0.2em; 0.2em;
`

const Icon = styled(FontAwesomeIcon)`
  color: white;
`

const Text = styled.p`
  color: white;
  padding: 0em;
  margin: 0 auto 0 0.5em;
  float: right;
`

export default Badge

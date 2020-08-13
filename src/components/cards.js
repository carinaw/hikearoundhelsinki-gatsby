import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Cards = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "home-cards" } }) {
        nodes {
          id
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <div>
      <div className="home-cards">
        {data.images.nodes.map(image => (
          <a href="">
            <Img key={image.id} fixed={image.childImageSharp.fixed} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Cards

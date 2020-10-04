import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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
          <a>
            <Img key={image.id} fixed={image.childImageSharp.fixed} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Cards

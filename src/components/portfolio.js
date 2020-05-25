import React from "react";
import{useStaticQuery, graphql, Link} from "gatsby";
import Img from 'gatsby-image';

const Portfolio =() =>{

    const data = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "avatar2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner">
    <div className="container">
      <div className="row">
        <div className="main-image left">
        <Img fluid={data.avatarImage.childImageSharp.fluid} />
        </div>
        <div className="main-text">Subhasmita Sahoo</div>
      </div>
      <div  className="description">
      <p>
React JS developer with more than 3yrs of experience. 
Specialized in web development. Strong organizational,
 presentational, and communication skills.
 </p>
      <div className="btn-row">
          <Link to='/contact'>HIRE ME</Link>
      </div>
      </div>
    </div>
  </div>
  )

}


export default Portfolio;
import React from "react"
import '../styles/style.scss'
import {graphql,useStaticQuery} from 'gatsby'
import Header from '../components/header'
import Portfolio from "../components/portfolio"
import ProjectPreview from '../components/projectPreview'
import Footer from "../components/footer"
const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    allProjectsJson{
      edges{
        node{
          title
          url
          slug
          description
         
        }
      }
    }
  }
  
  `)

  const projects = data.allProjectsJson.edges

  return (
    <div>
        <Header/>
         <Portfolio/> 

        
        {projects.map(({node:project}) =>{

          const title = project.title;
          const description = project.description
          const slug = project.slug

        return (
          <ProjectPreview
          title={title}
          description={description}
          slug={slug}
          />
         )
        })}

    </div>  
  )
}

export default IndexPage

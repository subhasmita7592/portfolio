import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const ProjectPreview = ({ title, description, slug, imageData }) => (
  <div className="about-blurb">
          <div className="container">
            
        <div className="inner-blurb">
          <div className="content">
          <Link to={`/${slug}/`}>
      
            </Link>
            <h2 style={{textAlign:"center"}}>
              <Link to={`/${slug}/`}>{title}</Link>
            </h2>
            <p>{description}</p>
            <p>
              <Link to={`/${slug}/`}>View this project &rarr;</Link>  
            </p>
          </div>
          </div>
          </div>
          </div>
   
);

export default ProjectPreview;
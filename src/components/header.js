import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="" style={{ fontWeght: 700,
        TextDecoretion: "none",
        letterSpacing: "1.5px",
        color: "black"}}>
          <Link to="/">PORTFOLIO</Link>
        </div>
        <div className="" >
          <nav style={{  margin: "20px",
                textDecoration: "none",
                letterSpacing: "1.75px",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                color:"black"}}>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header

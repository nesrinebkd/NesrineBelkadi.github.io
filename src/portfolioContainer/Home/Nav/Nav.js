import React from "react";
import './Nav.css'
import { Link } from "react-scroll";
function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-parent">
        <h1>Nesrine</h1>
      </div>
      <ul className="nav-list">
        
          <li><Link to="Home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
       
        
          <li><Link to="AboutMe" spy={true} smooth={true} offset={50} duration={500}>About Me</Link></li>
        
        
          <li><Link to="Resume" spy={true} smooth={true} offset={50} duration={500}>Resume</Link></li>
        
        
          <li><Link to="ContactMe" spy={true} smooth={true} offset={50} duration={500}>Contact Me</Link></li>
       
      </ul>
    </div>
  );
}

export default Nav;

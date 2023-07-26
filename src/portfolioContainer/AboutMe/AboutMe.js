import React from "react";
import './AboutMe.css'
function AboutMe() {
  return (
    <div className="aboutMe-container">
      <div className="aboutMe-parent">
        <h1>About Me</h1>
        <h6>Why Choose Me?</h6>
        
      </div>
      <div className="aboutMe-details">
        <div className="abouMe-picture-background">
          <div className="AboutMePicture"></div>
        </div>
        <div className="aboutMe-profile">
          <p>
            My Name is Nesrine BELKADI, a full stack developer and A motivated
            recent graduated from the Higher National School of
            Telecommunications and ICT,with a strong enthusiasm for machine
            learning research, I am looking for a challenging position in the
            field, I have strong background in programming and machine learning
            , I am ready to bring those talents and enthusiasm to a dynamic
            research team.
          </p>
          {"      "}
          <h3>Here are few Highlights</h3>
          <ul className="AboutMe-list">
            <li>Full stack Developer</li>
            <li>Telecoms and Digital Technologies Engineer</li>
            <li>JavaScript is my preffered language</li>
            <li>Passionate by Machine Learning</li>
          </ul>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="Nesrine BELKADI.pdf" download="Nesrine Belkadi.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

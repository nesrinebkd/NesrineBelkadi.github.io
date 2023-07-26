import React from "react";
import Typical from "react-typical";
import './Profile.css'
import { Link } from "react-scroll"
function Profile() {
  return (
    <div className="Profile-Container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/rine.nes.180/">
                <i className="fa fa-facebook-square"></i>
              </a>

              <a href="https://twitter.com/NesrineBlkd">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/nesrinebkd/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="Profile-details-name">
            <span className="primary-text">
              {""}
              Hello I am <span className="highlighted-text">Nesrine</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Telecom Engineer",
                    2000,
                    "Full stack Developer",
                    1000,
                  ]}
                />
              </h1>

              <span className="profile-role-tagline">
                Ready to devlop your aplications in a JS environement
              </span>
            </span>
          </div>
          <div className="profile-options">
          <Link to="ContactMe" spy={true} smooth={true} offset={50} duration={500}><button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button></Link>
            
            <a href="Nesrine BELKADI.pdf" download="Nesrine Belkadi.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-piture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

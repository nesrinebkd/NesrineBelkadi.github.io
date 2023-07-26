import React from 'react'
import './Footer.css'
import { Link } from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
function Footer() {
  return (
    <div className="footer-container">
      <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
      <BsFillArrowUpCircleFill color='white' fontSize={25}/>
      </Link>
        <h5>Full stack developer and passionate about Machine learning</h5>
        <h6>Feel free to contact me on other social media platforms</h6>
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
    </div>
  )
}

export default Footer
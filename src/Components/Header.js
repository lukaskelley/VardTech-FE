import React, { Component } from "react";
import Fade from "react-reveal";
import {Col, Row} from "antd"
import 'antd/dist/antd.min.css'
import "../asset/css/custom.css"

import Logo from "../asset/img/Logo.png"
import homeIMG from "../asset/img/homeIMG.png"
class Header extends Component {
  render() {
    return (
      <div id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <Row>
              <Col lg={3} style={{width:"100%"}}>
                <img src={Logo} alt="logo"/>
              </Col>
              <Col lg={9}/>
              <Col lg={8}>
                <li className="current">
                <a className="smoothscroll" href="#home">
                  What
                </a>
                </li>

                <li>
                  <a className="smoothscroll" href="#about">
                    How
                  </a>
                </li>

                <li>
                  <a className="smoothscroll" href="#resume">
                    For Whom
                  </a>
                </li>

                <li>
                  <a className="smoothscroll" href="#portfolio">
                    FAQ
                  </a>
                </li>
              </Col>
              <Col lg={4}>
                <li>
                  <a className="smoothscroll contactBtn" href="#contact">
                    Contact
                  </a>
                </li>
              </Col>
            </Row>
          </ul>
        </nav>

        <div className="banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">COLLABORATIVE DATA WORKSPACE FOR MODERN TEAMS</h1>
            </Fade>
          </div>

          <Fade bottom>
            <Row  style={{borderTop:"4px solid #7700FF"}}>
              <Col lg={12} style={{width:"100%"}}>
                <img src={homeIMG} alt="homeIMG" className="homeIMG"/>
              </Col>  
              
              <Col lg={12} className="homeDetailContainer">
                <p style={{ color: "#878787", fontWeight:"700"}}>
                  Vard is a real-time collaborative platform for data science and analytics, bringing together SQL, Python, R in one workspace for teams. Easy to manage, share and iterate
                 
                </p>
                <p style={{color: "#878787", fontWeight:"700"}}>
                  Visualisation, reporting and data learning complete the process
                </p>
                <button className="learnMoreBtn">
                  Learn more
                </button>
              </Col>  
            </Row>
          </Fade>
        </div>
        
      </div>
     
    );
  }
}

export default Header;

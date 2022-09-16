import React, { Component } from "react";
import Fade from "react-reveal";
import { Row, Col } from "antd"

import aboutIMG from "../asset/img/aboutIMG.png"
import aboutIMG2 from "../asset/img/aboutIMG2.png"
class About extends Component {
  render() {

    return (
      <section id="about">
        <Fade duration={1000}>
          <Row  style={{borderTop:"4px solid #7700FF"}}>
            <Col lg={13} className="homeDetailContainer">
              <p className="speadTitle" style={{ color: "#00FFAE", fontWeight:"700", fontStyle:"italic", fontSize:"50px", lineHeight:"100%"}}>
               SPEAD YOUR DATA WORKFLOW ON EVERY STAGE
              </p>
              <p style={{ color: "#878787", fontWeight:"700", lineHeight:"150%", paddingLeft:"4%", paddingRight:"4%"}}>
              Start with data, connect to sources with tons of integrations
              </p>
              <p style={{color: "#878787", fontWeight:"700", lineHeight:"150%", paddingLeft:"4%", paddingRight:"4%"}}>
              Collaborate together with team using SQL, Python, R all in one notebook
              </p>
              <p style={{color: "#878787", fontWeight:"700", lineHeight:"150%", paddingLeft:"4%", paddingRight:"4%"}}>
              Receive learning hints, visualise and report final iterations
              </p>
            </Col>  

            <Col lg={11} style={{width:"100%"}}>
              <img src={aboutIMG} alt="homeIMG" className="aboutIMG"/>
            </Col>  
            
          </Row>
          <Row style={{ borderTop: "4px solid #7700FF" }}>
            <Col lg={12} style={{width:"100%"}}>
              <img src={aboutIMG2} alt="homeIMG" style={{width: "100%", height:"100%", padding:"0px"}}/>
            </Col>  
            
            <Col lg={12} className="homeDetailContainer" style={{width:"100%"}}>
              <p style={{ color: "#878787", fontWeight:"700", lineHeight:"150%", paddingLeft:"4%"}}>
              - Collaborate together
              </p>
              <p style={{color: "#878787", fontWeight:"700", lineHeight:"150%", paddingLeft:"4%"}}>
              - Comment code
              </p>
              <p style={{color: "#878787", fontWeight:"700", lineHeight:"150%", paddingLeft:"4%"}}>
              - Save and change history
              </p>
              <br/>
              <p style={{color: "#878787", fontWeight:"700", lineHeight:"150%", paddingLeft:"4%"}}>
              - Learning hints
              </p>
              <p style={{color: "#878787", fontWeight:"700", lineHeight:"150%", paddingLeft:"4%", paddingRight:"4%"}}>
              - Visualization
              </p>
              <p style={{color: "#878787", fontWeight:"700", lineHeight:"150%", paddingLeft:"4%", paddingRight:"4%"}}>
              - Reporting
              </p>
            </Col>  

          </Row>
        </Fade>
      </section>
    );
  }
}

export default About;

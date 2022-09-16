import React, { Component } from "react";
import Slide from "react-reveal";

import {Row, Col} from "antd"
class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <Slide left duration={1300}>
          <Row  style={{borderTop:"4px solid #7700FF", paddingBottom:"10px"}}>
            <Col lg={24} className="homeDetailContainer">
              <p className="solutionTitle" style={{ color: "#00FFAE", fontWeight:"700", fontStyle:"italic", fontSize:"50px", lineHeight:"100%"}}>
              SOLUTION FOR DIFFERENT TEAMS
              </p>
              <table>
                <tr>
                  <td>DATA</td>
                  <td>FINANCE</td>
                  <td>HR</td>
                </tr>
                <tr>
                  <td>OPERATIONS</td>
                  <td>SALES & MARKETING</td>
                  <td>EDUCATION</td>
                </tr>
              </table>
            </Col>  
          </Row>
        </Slide>
      </section>
    );
  }
}

export default Resume;

import React, { Component } from "react";
import Fade from "react-reveal";
class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio" style={{padding:"100px", borderTop:"4px solid #7700FF"}}>
        <Fade left duration={1000} distance="40px">
          <h1 className="faqTitle" style={{color:"#00FFAE", fontSize:"55px", paddingBottom:"80px", fontStyle:"italic"}}>FAQ</h1>
          <div style={{borderTop:"4px solid #00FFAE", paddingTop:"30px"}}>
            <h2 style={{color:"white", fontSize:"39px", paddingBottom:"30px", lineHeight:"120%"}}>How and when was the company founded? Can you share your story?</h2>
            <p style={{color:"#878787", fontSize:"25px", fontWeight:"700"}}>
            Vard is founded in 2022 by the team of specialists in startups, analytics, data engineering, entrepreneurship, visual storytelling, art, AI and the future of work.
            <br/>
            <br/>
            We are inspired by the idea of making teams collaborate together in a fast and smooth iterations, dealing with many issues on analytics both educational, business and research type.
            </p>
          </div>
          <div style={{borderTop:"4px solid #00FFAE", paddingTop:"30px"}}>
            <h2 style={{color:"white", fontSize:"39px", paddingBottom:"30px", lineHeight:"120%"}}>Who runs the company?</h2>
            <p style={{color:"#878787", fontSize:"25px", fontWeight:"700"}}>
            The team behind Vard is divided by competencies. Up to 10 people, with focus on specific areas of expertise, we know how to work together. 
            <br/>
            <br/>
            That's where the real power comes.
            </p>
          </div>
          <div style={{borderTop:"4px solid #00FFAE",borderBottom:"4px solid #00FFAE", paddingTop:"30px"}}>
            <h2 style={{ color: "white", fontSize: "39px", paddingBottom: "30px", lineHeight:"120%"}}>
              Where is the company headquartered?
            </h2>
            <br/>
            <p style={{color:"#878787", fontSize:"25px", fontWeight:"700"}}>
            We believe in a space location. So somewhere in Metaverse we live on parallel universe. 
            <br/>
            <br/>
            In terms of Earth location, we are fully remote team located in Canada, Armenia, Philippines, Singapore etc. 
            </p>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;

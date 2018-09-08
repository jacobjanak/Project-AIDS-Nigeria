import React from "react";
import "./About.css";
import about01 from "../../images/about01.jpg";
import about02 from "../../images/about02.jpg";

const About = () => (
  <div className="about-page">
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h3>ABOUT PROJECT AIDS NIGERIA</h3>
        </div>
      </div>
      
      <div className="row">
        <div className="col-lg-8">
          <br/>
          <p>PAN began in summer of 2009 when the late Victor Dumete, Domale Dube, and Goodnews Baridoma began leading workshops at secondary schools in Gokana, Nigeria about HIV and other health topics. Sir Victor, as he was known, worked as a volunteer HIV counselor at the Bori General Hospital, the main hospital in Ogoni along with his pastoral duties at a parish in Biara.</p>
          <p>In those early days was the students’ enthusiasm to deal with the topics of health that kept us going. For many young women, it was the first time they were receiving instruction on topics pertaining to women’s health. School staff and faculty members who often sat through our presentations would continuously express how even they had benefited from the information we were teaching.</p>
          <p>With the continuous support of school leadership, in 2012, PAN adopted the peer to peer teaching method to train students to lead PAN workshops at each school. In 2016, PAN added HIV testing to its educational workshops. Students at each school now had the opportunity to receive free HIV testing to know their status.</p>
          <p>In 2018, PAN will launch PAN Girls, with a curriculum specially designed to help young women learn about their bodies while addressing the prevalence of sexual violence against women.</p>
        </div>
        <div className="col-lg-4">
          <br/>
          <br/>
          <img alt="" src={about01} id="image-about01"/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            Thank you sincerely for your support,
            <br/>
            <br/>
            Domale Dube Keys
            <br/>
            Project AIDS Nigeria
            <br/>
            Founding Director
          </p>
          <br/>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <img alt="" src={about02} id="image-about02"/>
        </div>
      </div>
    </div>
  </div>
);

export default About;

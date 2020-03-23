import React from "react";

import alexaint from "../images/alexaintegration.png";
import avt from "../images/avt-lane-detecton.png";

export default function Projects() {
  return (
    <div className="container-fluid">
      <br />
      <h1>
        <span className="heading-block">Projects</span>
      </h1>
      <br />
      <br />
      <hr />
      <section>
        <div className="container">
          <div className="row mb-0 justify-content-md-center sm-switch-order">
            <div className="col-md-4 d-sm-flex align-items-center mb-0">
              <a className="project-info" href="/project/alexaintegration">
                <div className="meta-info">
                  <div className="date-info">2018</div>
                  <div className="name-info">alexaintegration</div>
                </div>
                <div className="detail-info">
                  <h2>
                    Experience Alexa's AI virtual assistance on multiple PC's
                    simultaneously{" "}
                  </h2>
                  <div className="tech-info">Java</div>
                  <br />
                </div>
              </a>
            </div>
            <div className="col-md-6 pos-none case-study-column animated fadeInUp">
              <div className="image-page-wrapper ">
                <div className="single-image lazy-image-wrapper case-study-image">
                  <div className="image-overlay">
                    {" "}
                    <img className="img-fluid" src={alexaint} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row mb-0 justify-content-md-center sm-switch-order">
            <div className="col-md-4 d-sm-flex align-items-center mb-0">
              <a className="project-info" href="/project/avtlanedetection">
                <div className="meta-info">
                  <div className="date-info">2019</div>
                  <div className="name-info">AVT-lane-detection</div>
                </div>
                <div className="detail-info">
                  <h2>Using dashcam footage for lane detection </h2>
                  <div className="tech-info">Python / OpenCV</div> <br />
                </div>
              </a>
            </div>
            <div className="col-md-6 pos-none case-study-column animated fadeInUp">
              <div className="image-page-wrapper ">
                <div className="single-image lazy-image-wrapper case-study-image">
                  <div className="image-overlay">
                    {" "}
                    <img className="img-fluid" src={avt} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/>
      <center>
        <div><h5>Interested in working together? Lets <a href="/chat">connect</a></h5></div>
      </center>
      <div className="spacer"></div>
    </div>
  );
}

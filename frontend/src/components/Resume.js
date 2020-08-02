import React from "react";
import Res from "../images/Resume.pdf";

export default function Resume() {
  return (
    <div className="container-fluid">
      <br />
      <h1>
        <span className="heading-block">Resume</span>
      </h1>
      <br />
      <br />
      <hr />
      <div className="container">
        <iframe
          src={Res}
          className="resx2"
          width="100%"
          height="800px"
          allowfullscreen=""
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

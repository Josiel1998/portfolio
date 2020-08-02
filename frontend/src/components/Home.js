import React from "react";

export default function Home() {
  return (
    <div className="container-fluid">
      <br/>
      <h1>
        <span className="heading-block">Welcome</span>
      </h1>
      <br />
      <br />
      <hr />

    <div className="wrap d-flex justify-content-center row">
    <div className="col intro">
      I am Josiel Delgadillo, an aspiring software engineer based in South Florida. I love to create, design, and
      find new ways to solve problems with technology.
      <br />
      <br />
      </div>
      <div className="col intro-sub">
        Currently, I am a senior at Penn State University pursuing a Bachelor's
        in Information Science & Technology and minoring in Security and Risk
        Analysis.
        <br />
        <br />
      Explore my portfolio to learn more about myself.
    </div>
    </div>
    </div>
  );
}

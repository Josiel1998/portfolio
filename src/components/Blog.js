import React from "react";
import emptyState from "../images/emptyState/3081672.jpg"
import { Row, Col } from "react-bootstrap"

export default function Blog() {
  return (
    <div className="container-fluid">
      <br />
      <h1>
        <span className="heading-block">Blog</span>
      </h1>
      <br />
      <br />
      <hr />
      <div className="container">
      <h3 style={{textAlign:"center"}} className="intro-sub">Ooops, still hard at work. Please visit at a later time in the the future.</h3>

        <img 
        src={emptyState}
        className="img-fluid"
        max-width="800px"
        height="800px"
        />
      
      <a style={{}} href="https://www.freepik.com/free-photos-vectors/business" target="_blank"> Image credits by pikisuperstar</a>
            </div>
      <div className="spacer"></div>
      </div>
  );
}
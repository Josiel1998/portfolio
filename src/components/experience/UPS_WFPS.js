import React from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import structure from "../../images/Structure.png";

export default function UPS_WFP() {
  return (
    <div className="container-fluid">
      <br />
      <h1>
        <span className="heading-block">WFP Specialist</span>
      </h1>
      <br />
      <ol class="breadcrumb breadcrumb-sty">
        <li class="breadcrumb-item">
          <a href="/" role="button">
            Home
          </a>
        </li>
        <li class="breadcrumb-item">
          <a href="/experiences">Experiences</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <span class="active">WFP Specialist</span>
        </li>
      </ol>
      <hr />
      <br />
      <div className="main container">
        <div className="row mb-0 justify-content-center align-items-center">
          <div className="col-sm-8 col-md-7 col-lg-8 col-xl-6 mb-0">
            <strong>Overview</strong>
            <h3>People and data</h3>
            <div>
              The Workforce Planning Specialist role was a data analyst role focused
              on quality control, compiling and validating many data sets, analyzing, and reporting information. The scope of the
              data I worked on represented the human workforce UPS had in the Americas Region, this
              information is presented on the Human Capital Committee, the Transformation Office, 
              Corporate, Americas Region, and lastly local human resources. Much of the census data 
              I worked on had to have an alignment from a financial perspective due to business planning. 
              <br />
              <br />
              During my role, I was responsible for quarterly, monthly, weekly, and ad-hoc reports. 
              In addition to creating and compiling reports, I created visualizations for
              important targeted metrics for the company, such as female management representation in
              the operations. In addition to tracking metrics for the region, I also directed meetings
              with senior management for the region. 
            </div>
            <br />
          </div>
          <div className="col-md-3 col-sm-4 side-block mb-0 animated fadeInUp">
            <div>
              <strong>Tools used</strong>
              <br />
              <span class="badge badge-pill badge-primary">MS Excel</span> 
              <span class="badge badge-pill badge-primary">MS Power Bi</span>
              <span class="badge badge-pill badge-primary">HTML/CSS/JS</span> 
              <br />
              <br />
            </div>
            <div>
              <strong>Year</strong>
              <br />
              Aug. 2018 - Aug - 2019
            </div>
            <br />
            <div>
              <strong>Exposure</strong>
              <br />
              - Self taught data visualization
              <br/><br/>
              - Directing meetings
            </div>
            <br/>
          </div>
        </div>
        <br />
      </div>
      <div className="spacer"></div>
    </div>
  );
}

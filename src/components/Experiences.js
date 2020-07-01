import React from "react";
import { Card } from "react-bootstrap";

export default function Experiences() {
  return (
    <div className="container-fluid">
      <br />
      <h1>
        <span className="heading-block">Experiences</span>
      </h1>
      <br />
      <br />
      <hr />
      <div className="main container">
        <div className="row">
          <div className="col">
            <Card style={{ width: "20rem", border: "0px" }}>
              <Card.Body>
                <Card.Title>Business Process Improvement Intern</Card.Title>{" "}
                <br />
                <Card.Subtitle className="mb-2 text-muted">
                  Jan. 2018 - Aug. 2018
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  <a className="mb-2 text-muted" target="_blank" href="https://www.ups.com/us/en/Home.page?">United Parcel Service</a>
                </Card.Subtitle>
                <Card.Text>
                  Automated multiple existing internal processes through
                  development to maximize the efficiency of process time.
                </Card.Text>
                <Card.Link
                  className="heading-block"
                  href="/#/experience/ups_intern"
                >
                  More Info
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            {" "}
            <Card style={{ width: "20rem", border: "0px" }}>
              <Card.Body>
                <Card.Title>Workforce Planning Specialist</Card.Title> <br />
                <br />
                <Card.Subtitle className="mb-2 text-muted">
                  Aug. 2018 - Sep. 2019
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                <a className="mb-2 text-muted" target="_blank" href="https://www.ups.com/us/en/Home.page?">United Parcel Service</a>
                </Card.Subtitle>
                <Card.Text>
                  Reported, audited, contrasted and manipulated data into
                  information via reports, business cases, and visualizations
                  for decision-making.
                </Card.Text>
                <Card.Link
                  className="heading-block"
                  href="/#/experience/ups_wfp"
                >
                  More Info
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            {" "}
            <Card style={{ width: "20rem", border: "0px" }}>
              <Card.Body>
                <Card.Title>Software Engineer Intern</Card.Title> <br />
                <br />
                <Card.Subtitle className="mb-2 text-muted">
                  Jun. 2020 - Sept. 2020
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                <a className="mb-2 text-muted" target="_blank" href="https://www.pfizer.com/">Pfizer</a>
                </Card.Subtitle>
                <Card.Text>Responsible for gathering user requirements, conducting a technical solutions
                   analysis to align solution requirements, planning, designing, and deployment of an incident 
                   communication solution that will be used for communicating infrastructure events. 
</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
}

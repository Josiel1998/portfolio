import React from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import structure from "../../images/Structure.png";

export default function alexaintegration() {
  return (
    <div className="container-fluid">
      <br />
      <h1>
        <span className="heading-block">alexaintegration</span>
      </h1>
      <br />
      <ol class="breadcrumb breadcrumb-sty">
        <li class="breadcrumb-item">
          <a href="/portfolio/#/" role="button">
            Home
          </a>
        </li>
        <li class="breadcrumb-item">
          <a href="/portfolio/#/projects">Projects</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <span class="active">alexaintegration</span>
        </li>
      </ol>
      <hr />

      <div class="container embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          src="https://www.youtube.com/embed/zhqmSAh8rv8"
        ></iframe>
      </div>
      <br />
      <div className="main container">
        <div className="row mb-0 justify-content-center align-items-center">
          <div className="col-sm-8 col-md-7 col-lg-8 col-xl-6 mb-0">
            <strong>Overview</strong>
            <h3>Making Alexa more versitle for learning based environments</h3>
            <div>
              This project was an idea that was created during the inception of
              the HackPSU MLG Hackathon. The purpose this project served was to
              facilitate an improved learning environment with the use of
              virtual assistance.
              <br />
              <br />
              The idea originated from converting speech to text. Once an
              accurate representation of the speech was converted to text, we
              then created a bevy of actions we found useful inside of a
              learning environment. Such actions were web searches, launching
              applications, and even an action to lock the device. After some
              experimentation, the program was able to complete such tasks
              simultaneously on multiple PCs running Windows OS. I have since
              redesigned the structure of the source code, the original code
              involved a powershell file, java file, and a text document.
              <br />
              <br />
              The redesign of the project allowed me to remove the PowerShell
              file which served the purpose of scanning for a changed file. I
              have implemented a new code in java to handle all executions for
              the program and have allowed me to expand the functionality of the
              code for Mac OS users. Allowing java to handle all executions
              prevented me from creating a Bash file that would have served the
              same role as the defunct PowerShell file.
            </div>
            <br />
          </div>
          <div className="col-md-3 col-sm-4 side-block mb-0 animated fadeInUp">
            <div>
              <strong>Tech specs</strong>
              <br />
              <span class="badge badge-pill badge-primary">Windows OS</span> 
              <span class="badge badge-pill badge-primary">Mac OS</span>
              <span class="badge badge-pill badge-primary">Java</span> 
              <span class="badge badge-pill badge-primary">Powershell</span>
              <span class="badge badge-pill badge-primary">Bash</span>
              <span class="badge badge-pill badge-primary">IFTTT</span>
              <br />
              <br />
            </div>
            <div>
              <strong>Year</strong>
              <br />
              2018, 2020
            </div>
            <br />
            <div>
              <strong>Event</strong>
              <br />
              MLG Hackathon
            </div>
            <br/>
            <div>
              <strong>Source Code</strong>
              <br />
              <a href="https://github.com/nsalomonb/AlexaIntegration/tree/master/Amazon%20Alexa%20Control%20Files" target="_blank">Original, 2018</a>
              <br/>
              <a href="https://github.com/Josiel1998/AlexaIntegration" target="_blank">Redesign, 2020</a>
              <br/>
            </div>
          </div>
        </div>
        <br />
        <div className="row mb-0 justify-content-center align-items-center">
          <div className="col-sm-8 col-md-8 col-lg-9 col-xl-7 mb-0">
            <strong>In depth</strong>
            <h3>Structure</h3>
            <div className="container">
              <img src={structure} width="100%" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4 side-block mb-0 animated fadeInUp"></div>
        </div>
        <br />
        <div className="row mb-0 justify-content-center align-items-center">
          <div className="col-sm-8 col-md-8 col-lg-9 col-xl-7 mb-0">
            <strong>Opportunities</strong>
            <h3>Challeneges and potential</h3>
            <div>
              Throughout collaboration of this project, there were areas for
              opportunities and potential application of the technology. Some
              challenges at the time was finding a cloud service that supported
              speech-to-text conversion, at the time AWS did not have such
              support. Another challenge was finding a way to send the speech
              captured from Alexa to a service and then retrieving the text as a
              user for further processing of the action.
              <br />
              <br />
              The potential application of this technology is for a professor,
              teacher, or instructor to have control of a classroom where
              computers are used. The teacher can control the applicaiton that
              needs to be launched or lock all computers if the pupils are
              distracted through one voice command.
              <br />
              <br />
              After the redesign, an opportunity that may benefit the program is
              by manipulating the java code with more if statements to provide
              more flexibility with the command. At the moment, the commands are
              created via IFTTT applets. A better approach may be by just having
              IFTTT append the dropbox file with the targetted command
              application and the java program executed whether the application
              would like to be opened, closed, etc. Currently constructed if I
              wanted to close an application two different applets would need to
              be created on IFTTT with a different trigger command.
            </div>
          </div>
          <div className="col-md-2 col-sm-4 side-block mb-0 animated fadeInUp"></div>
        </div>
        <br />
        <br />
        <div>
          Collaborators: Nicolas Saloman, Gabriel Ynoa, Josiel Delgadillo
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

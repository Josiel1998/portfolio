import React from "react";
import gif from '../../images/Result_Video.gif'

export default function AVTLaneDetecton() {
  return (
    <div className="container-fluid">
      <br />
      <h1>
        <span className="heading-block">avt lane detection</span>
      </h1>
      <br />
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
          <span class="active">avt lane detection</span>
        </li>
      </ol>
      <hr />
      <div className="container">
      <img
        src={gif}
        className="img-fluid"
      />
      </div>

      <br/>
      <br/>
      <div className="main container">
        <div className="row mb-0 justify-content-center align-items-center">
          <div className="col-sm-8 col-md-7 col-lg-8 col-xl-6 mb-0">
            <strong>Overview</strong>
            <h3>How does autopilot work on vehicles?</h3>
            <div>
            Autopilot on vehicles work by having a wide range of cameras 
            and sensors to help the vehicle understand what is in front, beside, 
            and behind the vehicle. In this project, AVT Lane Detection uses 
            dashcam footage and still images to detect lanes on the road which 
            is similar to the technology that may be used for autopilot features on 
            vehicles. This project was my introduction to computer vision. 

            </div>
            <br />
          </div>
          <div className="col-md-3 col-sm-4 side-block mb-0 animated fadeInUp">
            <strong>Tech specs</strong>
            <br />
            <span class="badge badge-pill badge-primary">Python</span> 
            <span class="badge badge-pill badge-primary">Open CV Library</span> 
            <br />
            <br />
            <div>
              <strong>Year</strong>
              <br />
              2019
            </div>
            <br />
            <div>
              <strong>Event</strong>
              <br />
              DevPSU
            </div>
            <div>
              <br/>
              <strong>Source Code</strong>
              <br />
              <a href="https://github.com/Josiel1998/avt-lane-detection/tree/Josiel" target="_blank">Original, 2019</a>
            </div>
          </div>
        </div>
        <br />
        <div className="row mb-0 justify-content-center align-items-center">
          <div className="col-sm-8 col-md-8 col-lg-9 col-xl-7 mb-0">
            <strong>In depth</strong>
            <h3>Structure</h3>
            <div>
            The AVT Lane Detection program uses the OpenCV library for computer 
            vision purposes to convert a still image of video feedback to grayscale. 
            Afterward, a region of interest is determined (in front of the car) in 
            order to only detect lines in front of the vehicle's view. Using other 
            functions in OpenCV, the image is used to detect sharp changes in color 
            à la black/gray concrete and yellow/white lane lines and uses the edges 
            of the change of colors to determine lines. Afterward, ina video setting 
            the same concept is applied to every frame of the video.
            </div>
          </div>
          <div className="col-md-2 col-sm-4 side-block mb-0 animated fadeInUp"></div>
        </div>
        <br/>
        <div className="row mb-0 justify-content-center align-items-center">
          <div className="col-sm-8 col-md-8 col-lg-9 col-xl-7 mb-0">
            <strong>Opportunities</strong>
            <h3>Challeneges and potential</h3>
            <div>
            This project overall was a success, some of the opportunities that we had for 
            the project was having a good source of an image. This application of computer 
            vision has poor performance when it is used in overly bright settings, dark settings 
            without proper lighting, and conditions with precipitation. Another opportunity that we 
            had during the project was detecting lane consistently on video footage. This process was 
            much easier when we were able to select an image that met all good conditions to detect a line 
            accurately. Carefully if you look at the GIF above, you will find that there are instances where 
            the lane is detected incorrectly. During debugging, we also had issues detecting lanes in intersections 
            or dotted line scenarios. In an application of a moving vehicle, the technology of autopilot needs 
            to achieve six sigma quality. 
            <br/><br/>
            The potential application of this project is enormous as it 
            can change the way people and goods are transported. In the future I expect to add more to the project by
            applying machine learning practices for lane detection. 
            </div>
          </div>
          <div className="col-md-2 col-sm-4 side-block mb-0 animated fadeInUp"></div>
        </div>
        <br />
        <br />
      <div>
          Collaborators: Li Qian Zhu and Josiel Delgadillo
        </div>
      </div>

      <div className="spacer"></div>
    </div>
  );
}

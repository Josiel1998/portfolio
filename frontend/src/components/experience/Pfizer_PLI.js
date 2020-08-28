import React from "react";
import img from "../../images/pfizerinternship.jpg";

export default function Pfizer_PLI() {
  return (
    <div className="container-fluid">
      <br />
      <h1>
        <span className="heading-block">Project Lead Intern</span>
      </h1>
      <br />
      <ol class="breadcrumb breadcrumb-sty">
        <li class="breadcrumb-item">
          <a href="/#/" role="button">
            Home
          </a>
        </li>
        <li class="breadcrumb-item">
          <a href="/#/experiences">Experiences</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <span class="active">BPI Intern</span>
        </li>
      </ol>
      <hr />
      <br />
      <div className="main container">
      <div className="container">
        <img src={img} className="img-fluid" />
      </div>
      <br/>
        <div className="row mb-0 justify-content-center">
          <div className="col-sm-8 col-md-7 col-lg-8 col-xl-6 mb-0">
            <strong>Overview</strong>
            <h3>Internship with many hats!</h3>
            <div>
            I had the pleasure of interning at Pfizer Digital within the Commercial, GPD, and WRD Creation 
            Center and specifically within the Commercial Solution and Service Management team as a Project Lead Intern. 

              <br />
              <br />
              This was an interesting and challenging internship assignment as I had to lead a project virtually due to COVID-19. 
              This experience allowed me to have exposure to software development, project management, vendor management, software 
              development collaboration with an offshore team, and experience as a business analyst. 

              <br />
              <br />
              The Commercial Solution and Service Management team is responsible for sending global and regional communications for 
              system outages and updates. There were many challenges with the current process from inconsistent communications 
              (format and content), missing stakeholders, and there was no centralized source for information.
              <br />
              <br /> There were many stages to this project, from requirements gathering, technical solution analysis, to software 
              development of the product solution. First I started gathering requirements by interviewing key stakeholders from application 
              owners and application support members to understand their opportunities, their process, and understand an improvement that they’d 
              like to see to their current process. After retrieving all global and regional requirements, I created a document of user and 
              solution requirements; this allowed us to focus on key functionalities for our solution. 
              <br/>
              <br/>
              Next, it was the step of conducting a technical analysis of possible solutions or technologies. Multiple questions are asked in 
              this step and I had to create a cost/benefits comparison of possible solutions or technologies. The three solutions in question are the following:
              <li>Software as a Solution (SaaS)</li>
              <li>Pfizer internal tech stack</li>
              <li>SharePoint</li>

              <br/>
              <br/>
              All three solutions can accomplish some if not all requirements, but there is a focus on the long-term view of the solution. We had to focus on long term costs such as initial costs of deployment and maintenance costs. The SaaS option has some benefits and some drawbacks; such as the rapid deployment of a solution and no need for resources for maintenance as benefits, but drawbacks of choosing this option are not having ownership of the data, its recurring subscription fee, and its inability to meet all requirements. Next, the Pfizer internal tech stack solution has benefits such as customization of the entire solution and meeting all requirements, but it will take a long time to deploy a solution due to testing that the solution is safe, talent to build the solution is expensive. Finally, our chosen solution was to build our solution on SharePoint. The benefits of choosing this option are for its customization, quick to solution deployment, and the talent needed to support the solution (maintenance) is less expensive than using the internal tech stack. 
              <br/>
              <br/>
              After selecting our solution, SharePoint I used Microsoft Visio to sketch the life cycle of communications and wireframes of the solution we wanted to build. 
              Afterwards, we onboarded a team of offshore talent in India to join the project to assist with development 
              on SharePoint. I was involved in both leading the development and managing the project. I used the Agile methodology and led daily sprint 
              meetings with the offshore team from India. I tracked all project and sprint backlog cards through completion to assure we were on track for 
              deploying a minimal viable product by the end of sprint 3. We were able to use SharePoint lists for our backend infrastructure, Microsoft 
              PowerApps for customization of our forms, and Microsoft Power Automate to establish workflows for releasing email receipts and confirmations. 
              I led the charge in creating a custom web part using the SDFx Framework which involved using Typescript, jQuery, HTML/SCSS, and parsing through 
              many APIs. We were able to successfully render our data for users in an optimized fashion by implementing ODATA into out HTTP requests, thus creating 
              an attractive UI/UX using bootstrap and material design with minimal load times. 
              <br/>
              <br/>
              Ultimately the minimal viable product was deployed and participated in a series of demos and participated in user acceptance testing to assure the solution
               is stable and provided a series of quality control. 
               <br/>
               <br/>
               This internship provided exceptional experience with the Software Development Life Cycle (SDLC), management if offshore vendors, learning a new platform, 
               and programming languages. The solution was able to successfully perform CRUD operations for creating communications and posting them via an approval process. 
               The communications were able to be successfully created, planned, updated, and resolved. Also, the solution provided a dynamic template experience for users that
                allowed for a similar look and feel of all communications.
                <br/>
                <br/>
                After my internship, the team will continue with the development of the project and will implement phase 2 functionality due to the success of the minimal viable product. 
                Phase 2 includes a subscription-based model for reducing the overhead of tracking missing stakeholders from communications, a calendar view, and search functionality for historical 
                communications. 
            </div>
            <br />
          </div>
          <div className="col-md-3 col-sm-4 side-block mb-0 animated fadeInUp">
            <div>
              <strong>Tools used</strong>
              <br />
              <span class="badge badge-pill badge-primary">SharePoint</span>
              <span class="badge badge-pill badge-primary">SPFx Framework</span>
              <span class="badge badge-pill badge-primary">Typescript</span>
              <span class="badge badge-pill badge-primary">jQuery</span>
              <span class="badge badge-pill badge-primary">HTML</span>
              <span class="badge badge-pill badge-primary">SCSS</span>
              <span class="badge badge-pill badge-primary">Visio</span>
              <span class="badge badge-pill badge-primary">Microsoft Teams</span>
              <br />
              <br />
            </div>
            <div>
              <strong>Year</strong>
              <br />
              July 2020 - Aug. 2020
            </div>
            <br />
            <div>
              <strong>Exposure</strong>
              <br />
              <span class="badge badge-pill badge-warning">SDLC</span>
              <span class="badge badge-pill badge-warning">Self taught Typescript</span>
              <span class="badge badge-pill badge-warning">SharePoint Custom Web Part Development</span>
              <span class="badge badge-pill badge-warning">Vendor Management</span>
              <span class="badge badge-pill badge-warning">Managing a team of developers</span>

            </div>

            <br />
          </div>
        </div>
        <br />
        <div className="row mb-0 justify-content-center align-items-center">
          <div className="col-sm-8 col-md-8 col-lg-9 col-xl-7 mb-0">
            <strong>Opportunities</strong>
            <h3>Challenges</h3>
            <div>
              Some challenges I had throughout the internship opportunity was 
              being able to build and develop continuous feedback during scrum meetings. 
              This was proved to be a challenge due to not having the face-to-face communication
              due to the partner being located in India. Some opportunities were network connectivity 
              and being able to be on the same page about requirements and goals. 

            </div>
            <br />
            <h3>Exposure</h3>
            <div>
              The exposure I had during this opportunity was being able to manage the business side
              of technology and being able to manage technical assets. This was a great experience overall
              due to being exposed to different parts of what it takes to develop a solution from scratch. 

            </div>
          </div>
          <div className="col-md-2 col-sm-4 side-block mb-0 animated fadeInUp"></div>
        </div>
        <br />
        <br />
        <div></div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}

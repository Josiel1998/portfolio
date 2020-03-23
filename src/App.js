import React from "react";
import "./App.css";
import "aos/dist/aos.css"
import Navigation from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Exp from "./components/Experiences";
import bpii from "./components/experience/UPS_BPI";
import wfp from "./components/experience/UPS_WFPS";
import Projects from "./components/Projects";
import alexainegration from "./components/projects/Alexaintegration";
import avtlanedetection from "./components/projects/AVTLaneDetection";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import Footer from "./components/Footer"
import connection from "./components/Connect";
import Index from "./components/Index"
//https://www.codyreppert.com/

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navigation />
        <div className="">
          <Switch>
            <Route path="/experiences" component={Exp} />
            <Route path="/experience/ups_intern" component={bpii} />
            <Route path="/experience/ups_wfp" component={wfp} />
            <Route path="/projects" component={Projects} />
            <Route path="/project/alexaintegration" component={alexainegration}  exact/>
            <Route path="/project/avtlanedetection" component={avtlanedetection}  exact/>
            <Route path="/" component={Index} exact />
            <Route path="/resume" component={Resume} />
            <Route path="/blog" component={Blog} />
            <Route path="/chat" component={connection} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
    /*<div>
        <Navigation/>
      </div>*/
  );
}

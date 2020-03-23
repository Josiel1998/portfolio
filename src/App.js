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
    <Router>
      <div>
        <Navigation />
        <div className="">
          <Switch>
            <Route path="/myapp/experiences" component={Exp} />
            <Route path="/myapp/experience/ups_intern" component={bpii} />
            <Route path="/myapp/experience/ups_wfp" component={wfp} />
            <Route path="/myapp/projects" component={Projects} />
            <Route path="/myapp/project/alexaintegration" component={alexainegration}  exact/>
            <Route path="/myapp/project/avtlanedetection" component={avtlanedetection}  exact/>
            <Route path="/myapp/" component={Index} exact />
            <Route path="/myapp/resume" component={Resume} />
            <Route path="/myapp/blog" component={Blog} />
            <Route path="/myapp/chat" component={connection} />
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

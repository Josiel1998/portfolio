// BUILD: npm run deploy 
import React from "react";
import "./App.css";
import "aos/dist/aos.css";
import Navigation from "./components/Navbar.js";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Admin from "./components/Admin"
import Exp from "./components/Experiences";
import bpii from "./components/experience/UPS_BPI";
import wfp from "./components/experience/UPS_WFPS";
import pli from "./components/experience/Pfizer_PLI"
import Projects from "./components/Projects";
import alexainegration from "./components/projects/Alexaintegration";
import avtlanedetection from "./components/projects/AVTLaneDetection";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import connection from "./components/Connect";
import Index from "./components/Index";
import template from "./components/blogs/template"

export default function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="">
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/experiences" component={Exp} />
            <Route path="/experience/ups_intern" component={bpii} />
            <Route path="/experience/ups_wfp" component={wfp} />
            <Route path="/experience/pfizer_pli" component={pli} />
            <Route path="/projects" component={Projects} />
            <Route
              path="/project/alexaintegration"
              component={alexainegration}
              exact
            />
            <Route
              path="/project/avtlanedetection"
              component={avtlanedetection}
              exact
            />
            <Route
              path="/blog/template"
              component={template}
              exact
            />
            <Route path="/" component={Index} exact />
            <Route path="/resume" component={Resume} />
            <Route path="/blog" component={Blog} />
            <Route path="/chat" component={connection} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

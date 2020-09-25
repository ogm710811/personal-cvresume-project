import React from "react";

import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Aux from "./hoc/Auxiliary/Auxiliary";
import Home from "./containers/Home/Home";
import AboutMe from "./containers/AboutMe/AboutMe";
import Skills from "./containers/Skills/Skills";
import Experience from "./containers/Experience/Experience";
import Education from "./containers/Education/Education";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";

function App() {
  return (
    <Aux>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Aux>
  );
}

export default App;

import React from "react";

import Aux from "../../../hoc/Auxiliary/Auxiliary";
import "./SideDrawer.css";
import logoImage from "../../../assets/img/01_me.png";
import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = (props) => (
  <Aux>
    <nav className="navbar navbar-default navbar-static-top">
      <div className="logo">
        <a href="index-vertical.html" className="navbar-brand">
          <img src={logoImage} alt="Logo" />
        </a>
      </div>
      <NavigationItems clicked={props.clicked} />
    </nav>
  </Aux>
);

export default sideDrawer;

import React from "react"

import Aux from "../../../hoc/Auxiliary/Auxiliary";

const sideDrawerToggle = (props) =>
  <Aux>
    <a className="mobile-menu-opener" onClick={props.clicked}>
      <i className="fa fa-bars"></i>
    </a>
  </Aux>;

export default sideDrawerToggle

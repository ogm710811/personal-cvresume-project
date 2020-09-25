import React from "react";

import "./NavigationItems.css";
import NavigationItem from "../NavigationItem/NavigationItem";

const links = [
  { label: "Home", link: "/" },
  { label: "About me", link: "/about-me" },
  { label: "Skills", link: "/skills" },
  { label: "Experience", link: "/experience" },
  { label: "Education", link: "/education" },
  { label: "Portfolio", link: "/portfolio" },
  { label: "Contact", link: "/contact" },
];
const navigationItems = (props) => (
  <div id="navbar">
    <ul className="nav navbar-nav navbar-right">
      {links.map((link) => (
        <NavigationItem
          key={link.label}
          clicked={props.clicked}
          link={link.link}
          exact={link.label === "Home"}
        >
          {link.label}
        </NavigationItem>
      ))}
    </ul>
  </div>
);

export default navigationItems;

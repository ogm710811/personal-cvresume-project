import React from "react";

const socialLink = (props) => (
  <li>
    <a href={props.url}>
      <i className={props.faIcon} aria-hidden="true"></i>
    </a>
  </li>
);

export default socialLink;

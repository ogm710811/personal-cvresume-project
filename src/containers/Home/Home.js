import React from "react";

import "./Home.css";
import TyperAnimation from "../../components/UI/TyperAnimation/TyperAnimation";
import SocialLink from "../../components/UI/SocialLink/SocialLink";

const home = (props) => {
  const socialLinks = [
    { url: "facebook.com", faIcon: "fa fa-facebook" },
    { url: "twitter.com", faIcon: "fa fa-twitter" },
    { url: "skype.com", faIcon: "fa fa-skype" },
    { url: "pinterest.com", faIcon: "fa fa-pinterest-p" },
    { url: "dribble.com", faIcon: "fa fa-dribbble" },
  ];
  return (
    <div>
      <section className="content" id="home">
        <div className="banner">
          <div className="caption-info">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="caption-info-inner">
                    <h1>I'm Orestes Garcia</h1>
                    <TyperAnimation
                      heading="I am expert in"
                      dataText={[
                        "Mobile apps.",
                        "UI/UX design.",
                        "Analytics.",
                        "Brand identity.",
                        "Photography.",
                      ]}
                    />
                    <ul className="social-link">
                      {socialLinks.map((link) => (
                        <SocialLink url={link.url} faIcon={link.faIcon} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;

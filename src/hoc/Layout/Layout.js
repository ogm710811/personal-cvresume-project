import React from "react";

import "./Layout.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Footer from "../../components/Footer/Footer";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import SideDrawerToggle from "../../components/Navigation/SideDrawerToggle/SideDrawerToggle";
import useToggle from "../../hooks/useToggle";

const initialState = {
  isSideDrawerOpen: false,
};

const Layout = (props) => {
  const [isToggled, toggle] = useToggle(initialState.isSideDrawerOpen);
  const cssClasses = ["menu", isToggled ? "open-menu" : "close-menu"];

  return (
    <Aux>
      <aside className={cssClasses.join(" ")} id="menu">
        <SideDrawerToggle clicked={toggle} />
        <SideDrawer clicked={toggle} />
      </aside>
      <main className="main-content">{props.children}</main>
      <Footer />
    </Aux>
  );
};

export default Layout;

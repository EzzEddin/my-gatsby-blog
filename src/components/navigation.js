import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";
import Linkedin from "./SocialLinks/linkedin.svg";

export default props => (
  <nav className="navigation">
    <Linkedin />
    <ThemeChanger />
  </nav>
);

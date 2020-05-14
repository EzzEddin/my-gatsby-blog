import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";
import Linkedin from './SocialLinks/linkedin.svg'

export default props => (
  <nav className="navigation">
    <Link
      href="https://linkedin.com/in/ezzeddinabdullah"
      title="Linkedin"
      className="linkedin"
    >
      <Linkedin />
    </Link>
    <ThemeChanger />
  </nav>
);

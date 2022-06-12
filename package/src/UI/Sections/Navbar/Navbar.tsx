import React from "react";
import { useLanguage } from "../../../Context/TranslationContext";
import "./Navbar.scss";

const Navbar = () => {
  const { currentLanguage, languagesHolder, t } = useLanguage();

  return <section id="navbar"></section>;
};

export default Navbar;

import React, { useState } from "react";
import "./Navb.css";
import { useNavigate } from "react-router-dom";

function Nav2() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
 const navigate = useNavigate();
  const si = () => {
    navigate('/');
}

const map = () => {
  navigate('/map');
}


  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const scrollAbout = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollFooter = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById("footer");
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="nav">
      <a href="/Home" className="nav__brand">
        FOUND IT!
      </a>
      <ul className="nav">
      <li className="nav">
          <a href="" className="nav__link" onClick={ map}>
            Map 
          </a>
        </li>
        <li className="nav">
          <a href="#about" className="nav__link" onClick={scrollAbout}>
            About  
          </a>
        </li>
        <li className="nav">
          <a href="#footer" className="nav__link" onClick={scrollFooter}>
            Contact
          </a>
        </li>
        <li className="nav">
          <a onClick={si} className="nav__link">
            Signout
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Nav2;

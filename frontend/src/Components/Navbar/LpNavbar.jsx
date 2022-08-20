import React from "react";
import {Link} from 'react-router-dom';
import LinkedInBtn from "../OtherCompononts/LinkedInBtn";
import "./LpNavbar.scss";

function LpNavbar() {
  return (
    <div className="lpnavbar-container">
      <img
        src="./assets/images/networky_logo.png"
        alt="networky logo"
        width="152px"
      />
      <div className="under-container">
        <div className="links">
            <Link to='/about' className="simpleBtn">About</Link>
            <Link to='/contact' className="simpleBtn">Contact</Link>
        </div>
        <LinkedInBtn />
        <div className="langage-container">
            LN
        </div>
      </div>
    </div>
  );
}

export default LpNavbar;

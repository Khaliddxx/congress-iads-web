import React from "react";
import "./Footer.scss";
import zhermack from "../../Assets/Images/Sponsers/zhermack.svg";
import HFC from "../../Assets/Images/Sponsers/HFG_Group_Logo_ 1.svg";
import colgate from "../../Assets/Images/Sponsers/Colgate.svg";
import gold from "../../Assets/Images/Sponsers/gold.svg";
import KSA from "../../Assets/Images/Sponsers/KSA.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'

function Footer(props) {
  return (
    <>

      <div
      id="footer"
        className="footer"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <div className="footerBody">
        <div className="socialMediaLink">
            <div className="icon"><FontAwesomeIcon color="white" size="2x" icon={faFacebook} /></div>
          </div>

          <div className="socialMediaLink">
            <div className="icon"><FontAwesomeIcon color="white" size="2x" icon={faTwitter} /></div>
          </div>


          <div className="socialMediaLink">
            <div className="icon"><FontAwesomeIcon color="white" size="2x" icon={faInstagram} /></div>
          </div>
         
          <div className="socialMediaLink">
            <div className="icon"><FontAwesomeIcon color="white" size="2x" icon={faYoutube} /></div>
          </div>

          <div className="socialMediaLink">
            <div className="icon"><FontAwesomeIcon color="white" size="2x" icon={faPinterest} /></div>
          </div>
        </div>

      <p>IADS annual congress kazakhstan 2022®</p>

      </div>
    </>
  );
}

export default Footer;

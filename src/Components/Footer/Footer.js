import React from "react";
import "./Footer.scss";
import zhermack from "../../Assets/Images/Sponsers/zhermack.svg";
import HFC from "../../Assets/Images/Sponsers/HFG_Group_Logo_ 1.svg";
import colgate from "../../Assets/Images/Sponsers/Colgate.svg";
import gold from "../../Assets/Images/Sponsers/gold.svg";
import KSA from "../../Assets/Images/Sponsers/KSA.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <>
      <div
        id="footer"
        className="footer"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <div className="footerBody">
          <a
            target="_blank"
            href="https://www.facebook.com/iadsweborg"
            className="socialMediaLink"
          >
            <div className="icon">
              <FontAwesomeIcon color="white" size="2x" icon={faFacebook} />
            </div>
          </a>

          <a
            href="https://twitter.com/iadsweborg"
            target="_blank"
            className="socialMediaLink"
          >
            <div className="icon">
              <FontAwesomeIcon color="white" size="2x" icon={faTwitter} />
            </div>
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/iadsweborg/"
            className="socialMediaLink"
          >
            <div className="icon">
              <FontAwesomeIcon color="white" size="2x" icon={faInstagram} />
            </div>
          </a>

          <a className="socialMediaLink">
            <div
              target="_blank"
              href="https://www.youtube.com/c/iadsweborg"
              className="icon"
            >
              <FontAwesomeIcon color="white" size="2x" icon={faYoutube} />
            </div>
          </a>

          <div className="socialMediaLink">
            <div className="icon">
              <FontAwesomeIcon color="white" size="2x" icon={faPinterest} />
            </div>
          </div>
        </div>

        <p>IADS annual congress kazakhstan 2022®</p>
        <p>Developed by xDev</p>
      </div>
    </>
  );
}

export default Footer;

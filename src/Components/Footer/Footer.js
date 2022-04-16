import React from "react";
import "./Footer.scss";
import zhermack from "../../Assets/Images/Sponsers/zhermack.svg";
import HFC from "../../Assets/Images/Sponsers/HFG_Group_Logo_ 1.svg";
import colgate from "../../Assets/Images/Sponsers/Colgate.svg";
import gold from "../../Assets/Images/Sponsers/gold.svg";
import KSA from "../../Assets/Images/Sponsers/KSA.svg";

function Footer(props) {
  return (
    <>
      <div
        className="footer"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <div className="footerBody">
          <div className="socialMediaLink">
            <div className="icon"></div>
            <div className="link">Instagram</div>
          </div>
          <div className="socialMediaLink">
            <div className="icon"></div>
            <div className="link">Facebook</div>
          </div>
          <div className="socialMediaLink">
            <div className="icon"></div>
            <div className="link">Youtube</div>
          </div>
        </div>

      <p>IADS annual congress kazakhstan 2022®</p>

      </div>
    </>
  );
}

export default Footer;

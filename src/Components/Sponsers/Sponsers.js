import React from "react";
import "./Sponsers.scss";
import zhermack from "../../Assets/Images/Sponsers/zhermack.svg";
import zhermack2 from "../../Assets/Images/Sponsers/zhermack2.svg";

import HFC from "../../Assets/Images/Sponsers/HFG_Group_Logo_ 1.svg";
import HFC2 from "../../Assets/Images/Sponsers/HFG_Group_Logo_ 2.svg";
import colgate from "../../Assets/Images/Sponsers/Colgate.svg";
import gold from "../../Assets/Images/Sponsers/gold.svg";
import KSA from "../../Assets/Images/Sponsers/KSA.svg";

function Sponsers(props) {
  let currentPath=window.location.pathname;
  return (
    <>
      <div
        className="sponsers"
        style={{ backgroundColor: currentPath=='/' ? 'white' : '#2D2D2D' }}
      >
     { currentPath=='/' &&  <div  className="title">
          <p className="titleText">Our</p>
          <p className="subTitleText">Sponsors</p>
        </div> }
        <div className="sponsersBody">
         <img src={currentPath=='/' ?  zhermack: zhermack2} ></img>
         <img src={currentPath=='/' ?  HFC: HFC2} ></img>
          <img src={colgate} ></img>
          {/* <img src={gold} ></img> */}
          <img src={KSA} ></img>
        </div>
      </div>
    </>
  );
}

export default Sponsers;

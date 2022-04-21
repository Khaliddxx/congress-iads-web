import React from "react";
import "./Sponsers.scss";
import zhermack from "../../Assets/Images/Sponsers/zhermack.svg";
import zhermack2 from "../../Assets/Images/Sponsers/zhermack2.svg";

import HFC from "../../Assets/Images/Sponsers/HFG_Group_Logo_ 1.svg";
import HFC2 from "../../Assets/Images/Sponsers/HFG_Group_Logo_ 2.svg";
import colgate from "../../Assets/Images/Sponsers/Colgate.svg";
import gold from "../../Assets/Images/Sponsers/gold.svg";
import gold1 from "../../Assets/Images/Sponsers/gold1.svg";
import tr from "../../Assets/Images/Sponsers/tr.svg";
import tr1 from "../../Assets/Images/Sponsers/tr1.svg";
import KSA from "../../Assets/Images/Sponsers/KSA.svg";
import Uni from "../../Assets/Images/Sponsers/Uni.svg";

function Sponsers(props) {
  let currentPath = window.location.pathname;
  return (
    <>
      <div
        className="sponsers"
        style={{ backgroundColor: currentPath == "/" ? "white" : "#2D2D2D" }}
      >
        {currentPath == "/" && (
          <div className="title">
            <p className="titleText">Our</p>
            <p className="subTitleText">Sponsors</p>
          </div>
        )}
        <div className="sponsersBody">
          <img src={currentPath == "/" ? zhermack : zhermack2}></img>
          <img src={currentPath == "/" ? HFC : HFC2}></img>
          <img src={colgate}></img>
          <img src={currentPath == "/" ? tr : tr1}></img>
          <img src={Uni}></img>
          <img src={currentPath == "/" ? gold : gold1}></img>

          <img src={KSA}></img>
        </div>
      </div>
    </>
  );
}

export default Sponsers;

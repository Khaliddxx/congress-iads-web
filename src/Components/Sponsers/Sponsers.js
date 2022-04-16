import React from "react";
import "./Sponsers.scss";
import zhermack from "../../Assets/Images/Sponsers/zhermack.svg";
import HFC from "../../Assets/Images/Sponsers/HFG_Group_Logo_ 1.svg";
import colgate from "../../Assets/Images/Sponsers/Colgate.svg";
import gold from "../../Assets/Images/Sponsers/gold.svg";
import KSA from "../../Assets/Images/Sponsers/KSA.svg";

function Sponsers(props) {
  return (
    <>
      <div
        className="sponsers"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <div style={{ color: props.bodyTextColor }} className="title">
          <p className="titleText">Our</p>
          <p className="subTitleText">Sponsers</p>
        </div>
        <div className="sponsersBody">
          <img src={zhermack} ></img>
          <img src={HFC} ></img>
          <img src={colgate} ></img>
          {/* <img src={gold} ></img> */}
          <img src={KSA} ></img>
        </div>
      </div>
    </>
  );
}

export default Sponsers;

import React from "react";
import "./InfoCard.scss";
import memberPic from "../../Assets/Images/member.png";

function InfoCard(props) {
  return (
    <>
      <div
        className="infoCard"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <div className="title">{props.children}</div>
        <div style={{ color: props.bodyTextColor }} className="bodyText">
          {props.text}
        </div>
        <a
          style={{ backgroundColor: props.ctaColor, color: props.ctaFontColor }}
          className="infoCardCTA"
        >
          LEARN MORE
        </a>
      </div>
    </>
  );
}

export default InfoCard;

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
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

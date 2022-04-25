import React from "react";
import "./MemberCard.scss";

function MemberCard(props) {
  return (
    <>
      <div className="memberCard">
        <div className="image"><img src={props.img} /></div>
        <p className="name">{props.name} </p>
        <div className="position">{props.position}</div>
      </div>
    </>
  );
}

export default MemberCard;

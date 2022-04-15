import React from "react";
import "./MemberCard.scss";
import  memberPic  from "../../Assets/Images/member.png";

function MemberCard() {
  return (
    <>
      <div className="memberCard">
        <div className="image"><img src={memberPic} /></div>
        <div className="name">Ahmed Gamed </div>
        <div className="position">Chairperson</div>
      </div>
    </>
  );
}

export default MemberCard;

import React from "react";
import "./RegistrationCard.scss";
import RegIcon from "../../Assets/Images/Icons/RegCardIcon.svg";

function RegistrationCard(props) {
  return (
    <>
      <div
        className="registrationCard"
        style={{ backgroundColor: props.backgroundColor }}
      >
          <img className="registrationCardIcon" src={RegIcon} />

        <div className="mainRegCard">
          <div className="bodyRegCard">
            <p className="hongKong title">{props.title}</p>
            <p className="subTitle">{props.subTitle}</p>
            <p className="body">{props.body}</p>
          </div>
          <div className="ctasRegCard">
          <a className="ctaRegCard card1"  href={props.cta1href}>{props.cta1}</a>
         {props.cta2 && <a className="ctaRegCard card2"  href={props.cta2href}>{props.cta2}</a> }
        </div>
        </div>

     
      </div>
    </>
  );
}

export default RegistrationCard;

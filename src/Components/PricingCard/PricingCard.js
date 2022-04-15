import React from "react";
import "./PricingCard.scss";
function PricingCard(props) {
  return (
    <>
      <div className="pricingCard">
        <div style={{backgroundColor: props.color}} className="title">
          <p className="titleText">{props.title}</p>
          <p className="subtitleText">Package</p>
          <p className="price">€420</p>
        </div>

        <div className="features">{props.children}</div>

        <div  className="cta">
          <button style={{backgroundColor: props.color}}>Register Now!</button>
        </div>
      </div>
    </>
  );
}

export default PricingCard;

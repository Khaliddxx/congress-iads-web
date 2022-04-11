import React from "react";
import "./PricingCard.scss";
function PricingCard(props) {

  return (
    <>
      <div className="pricingCard">
        <div className="title">{props.title}</div>
        <div className="price">$420</div>

        <div className="features">
        {props.children}
        </div>

        <div className="cta">
          <button>Register Now!</button>
        </div>
      </div>
    </>
  );
}

export default PricingCard;

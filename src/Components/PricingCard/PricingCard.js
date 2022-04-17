import React from "react";
import "./PricingCard.scss";
function PricingCard(props) {
  return (
    <>
      <div className="pricingCard">
        <div style={{backgroundColor: props.color}} className="titleComp">
          {props.child1}
          <p style={{color: props.priceColor}} className="price"><span className="currency">€</span> {props.price}</p>
        </div>

        <div className="features">{props.child2}</div>

        <div  className="cta">
          <button style={{backgroundColor: props.color}}>Choose Package</button>
        </div>
      </div>
    </>
  );
}

export default PricingCard;

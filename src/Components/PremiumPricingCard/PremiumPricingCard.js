import React from "react";
import "./PremiumPricingCard.scss";
import icon from "../../Assets/Images/premcardIcon.svg";
function PremiumPricingCard(props) {
  return (
    <>
      <div className="premiumPricingCard">
        <img src={icon} />
        <div className="titleComp">
          <p className="hongKong">Pre+Post</p>
          <p className="title">Congress</p>
          <p className="subTitle">Package</p>
          <p className="price">
            <span className="currency">€</span>
            {props.price}
          </p>
        </div>
        <div className="border1"></div>
        <div className="features">{props.children}</div>

        <div className="cta">
          <button style={{ backgroundColor: props.color }}>
            <a style={{ textDecoration: "none", color: "black" }} href="/form">
              Choose Package{" "}
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default PremiumPricingCard;

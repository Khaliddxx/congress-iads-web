import React from "react";
import "./PremiumPricingCard.scss";
import icon from "../../Assets/Images/premcardIcon.svg";
function PremiumPricingCard(props) {
  return (
    <>
      <div className="premiumPricingCard">
        <img src={icon} />
        <div className="titleComp">
          <p className="hongKong" style={{ color: "white" }}>
            Pre+Post
          </p>
          <p className="title" style={{ color: "white" }}>
            Congress
          </p>
          <p className="subTitle">Package</p>
          <p className="price">
            <span className="currency" style={{ color: "white" }}>
              €
            </span>
            {props.price}
          </p>
        </div>
        <div className="border1"></div>
        <div className="features">{props.children}</div>

        <div className="cta">
          <a href="/form">
            <button style={{ backgroundColor: props.color }}>
              Choose Package
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default PremiumPricingCard;

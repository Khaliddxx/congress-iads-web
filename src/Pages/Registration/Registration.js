import React from "react";
import Packages from "../../Components/Packages/Packages";
import RegistrationCard from "../../Components/RegistrationCard/RegistrationCard";
import regImage from "../../Assets/Images/regImage.svg";
import refIcon from "../../Assets/Images/Icons/refIcon.svg";
import "./Registration.scss";

function Registration() {
  return (
    <>
      <div className="regPage">
        <div className="mainReg container">
          <img className="mainRegimg" src={regImage} />

          <div>
            <RegistrationCard
              title="Congress"
              subTitle="Packages"
              body="The congress offers different packages for you to choose from "
              cta1="LEARN MORE"
            />

            <RegistrationCard
              title="Congress"
              subTitle="Registration"
              body="Ready to embark on an all-new experience in the latest advances in dentistry?"
              cta1="REGISTER NOW"
            />

            <RegistrationCard
              title="Workshops & Training"
              subTitle="Registration"
              body="Learn new skills with the wide variety of hands-on workshops and dive into the much needed soft skills training sessions"
              cta1="LEARN NOW"
              cta2="REGISTER NOW"
            />
          </div>

          <RegistrationCard
            title="Lecture Contest & 
            Dental Olympics"
            subTitle="Registration"
            body="Participate in lecture contest and showcase your skills in the Dental Olympics"
            cta1="LEARN NOW"
            cta2="REGISTER NOW"
          />

          <RegistrationCard
            title="Exchange Fair"
            subTitle="Submission "
            body="Enjoy an exciting night filled with a variety of fun events, get to know differnt cultures and showcase your talents!"
            cta1="LEARN MORE"
            cta2="SUBMIT"
          />
        </div>

        <div className="refund container">
          <img src={refIcon} />
          <div className="refundTitle">
            <strong>Refund</strong>
            <br></br> Policy
          </div>

          <div className="refborder"></div>

          <div className="refundbody">
            Read about our terms and conditions regarding refund policy
          </div>
          <a className="refCta">Learn More</a>
        </div>

        <Packages />
      </div>
    </>
  );
}

export default Registration;

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
              cta1href="#packages"
            />

            <RegistrationCard
              title="Congress"
              subTitle="Registration"
              body="Ready to embark on an all-new experience in the latest advances in dentistry?"
              cta1="REGISTER NOW"
              cta1href="/form"
            />

            <RegistrationCard
              title="Workshops & Training"
              subTitle="Registration"
              body="Learn new skills with the wide variety of hands-on workshops and dive into the much needed soft skills training sessions"
              cta1="LEARN NOW"
              cta1href="/congresslectures"
              cta2="REGISTER NOW"
            />
          </div>

          <RegistrationCard
            title="Lecture Contest & 
            Dental Olympics"
            subTitle="Registration"
            body="Participate in lecture contest and showcase your skills in the Dental Olympics"
            cta1="LEARN NOW"
            cta1href="/scientific"
            cta2="REGISTER NOW"
            cta2href="/scientific"
          />

          <RegistrationCard
            title="Exchange Fair"
            subTitle="Submission "
            body="Enjoy an exciting night filled with a variety of fun events, get to know differnt cultures and showcase your talents!"
            cta1="LEARN MORE"
            cta1href="/landing/exchange"
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
          <a
            className="refCta"
            href="https://drive.google.com/file/d/1r47Ov9aukpNQ79dVTaqJ2NG75ZsBAv13/view"
            target={"_blank"}
          >
            Learn More
          </a>
        </div>

        <div id="packages">
          <Packages />
        </div>
      </div>
    </>
  );
}

export default Registration;

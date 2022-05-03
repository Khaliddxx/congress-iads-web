import React from "react";
import "./Transportation.scss";
import TransImage from "../../Assets/Images/TransImage.svg";
import TurkAir from "../../Assets/Images/turkair.png";
import Discount from "../../Assets/Images/discount.svg";

function Transportation() {
  return (
    <>
      <div className="transportationPage container">
        <div>
          <div className="transportationPageTitles">
            <p className="transportationPageTitle">About</p>
            <p className="transportationPageSubTitle hongKong">
              Transportation
            </p>
          </div>

          <img
            alt="Transport Image"
            style={{ width: "100%", marginTop: "-20px" }}
            src={TransImage}
          />
        </div>

        <div className="transpMainSection">
          <div className="transpMainSectionCard">
            <div className="transportationPageTitles">
              <p className="transportationPageTitle">Flight to</p>
              <p
                style={{ color: "#FDBE3D" }}
                className="transportationPageSubTitle hongKong"
              >
                Kazakhstan
              </p>
            </div>

            <div className="border1"></div>
            <div className="transpMainSectionCardBody">
              <p className="transpMainSectionCardBody1">
                You can book flights to Kazakhstan from a given link or from
                another preferred air ticket search aggregator site.
              </p>

              <div className="transDiscountDiv">
                <img src={TurkAir} />

                <div className="transDiscount">
                  15% discount is available on Turkish airlines flights
                </div>
                {/* <img src={Discount}/> */}
              </div>

              <p className="transpMainSectionCardBody2">
                *Discount will be available for confirmed attendees
              </p>
            </div>
          </div>

          <div className="transpMainSectionCard">
            <div className="transpMainSectionCardBody">
              <p className="transpMainSectionCardBody1">
                Almaty International Airport (ALA)
              </p>
            </div>
            <div className="border1"></div>

            <div className="transportationPageTitles">
              <p className="transportationPageTitle">Recommended</p>
              <p
                style={{ color: "#FDBE3D" }}
                className="transportationPageSubTitle hongKong"
              >
                Airport
              </p>
            </div>
          </div>

          <div className="transpMainSectionCard">
            <div className="transportationPageTitles">
              <p className="transportationPageTitle">Local</p>
              <p
                style={{ color: "#FDBE3D" }}
                className="transportationPageSubTitle hongKong"
              >
                Transportation
              </p>
            </div>

            <div className="border1"></div>
            <div className="transpMainSectionCardBody">
              <p className="transpMainSectionCardBody1">
                Don't worry! Two bus shifts will be organized from Almaty
                airport to the hotel– at 11:00 AM and 04:00 PM.
              </p>
            </div>
          </div>

          <div className="transpMainSectionCard">
        

            <div className="transpMainSectionCardBody">
              <p className="transpMainSectionCardBody1" >
                Visa regime of the Republic of Kazakhstan for foreign citizеns
              </p>
              <a href="/visa" className="transLearnMoreCTA">Learn More</a>
            </div>

            <div className="border1" ></div>

            <div className="transportationPageTitles">
              <p className="transportationPageTitle">Visa</p>
              <p
                style={{ color: "#FDBE3D" }}
                className="transportationPageSubTitle hongKong"
              >
                Requirements
              </p>
            </div>


           
          </div>
        </div>
      </div>
    </>
  );
}

export default Transportation;

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
            <p
              className="transportationPageSubTitle LuthonSouthard"
              style={{ color: "var(--secondary-color)" }}
            >
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
                style={{ color: "var(--secondary-color)" }}
                className="transportationPageSubTitle LuthonSouthard"
              >
                Northern Cyprus
              </p>
            </div>

            <div className="border1"></div>
            <div className="transpMainSectionCardBody">
              <p className="transpMainSectionCardBody1">
                You can book flights to Northen Cyrprus from a given link or
                from another preferred air ticket search aggregator site.
              </p>
            </div>
          </div>

          <div className="transpMainSectionCard">
            <div className="transpMainSectionCardBody">
              <p className="transpMainSectionCardBody1">
                Ercan Nicosia Airport (ECN)
              </p>
            </div>
            <div className="border1"></div>

            <div className="transportationPageTitles">
              <p className="transportationPageTitle">Recommended</p>
              <p
                // style={{ color: "#FDBE3D" }}
                className="transportationPageSubTitle LuthonSouthard"
              >
                Airport
              </p>
            </div>
          </div>

          <div className="transpMainSectionCard">
            <div className="transportationPageTitles">
              <p className="transportationPageTitle">Local</p>
              <p
                style={{ color: "" }}
                className="transportationPageSubTitle LuthonSouthard"
              >
                Transportation
              </p>
            </div>

            <div className="border1"></div>
            <div className="transpMainSectionCardBody">
              <p className="transpMainSectionCardBody1">
                Transport from and to the airport will be provided on
                pre-congress and congress arrival dates and congress &
                post-congress departure dates at various times set accordingly
                to arrival times of attendees. Transfers between hotel and any
                venues, social program spots as set on the schedule are also
                included in the package.
              </p>
            </div>
          </div>

          <div className="transpMainSectionCard">
            <div className="transpMainSectionCardBody">
              <p className="transpMainSectionCardBody1">
                Visa regime of the Northern Cyrprus for foreign citizеns
              </p>
              <a
                href="/https://mfa.gov.ct.tr/consular-info/visa-regulations/#:~:text=Foreigners%20visiting%20the%20TRNC%20may,unfit%20to%20enter%20the%20country."
                className="transLearnMoreCTA"
              >
                Learn More
              </a>
            </div>

            <div className="border1"></div>

            <div className="transportationPageTitles">
              <p className="transportationPageTitle">Visa</p>
              <p
                style={{ color: "" }}
                className="transportationPageSubTitle LuthonSouthard"
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

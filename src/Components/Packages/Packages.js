import React from "react";
import PremiumPricingCard from "../PremiumPricingCard/PremiumPricingCard";
import PricingCard from "../PricingCard/PricingCard";
import "./Packages.scss";


function Packages(props) {
  return (
    <>
    <div id="packagesSection" class="packagesSection">
          <div className="packagesSectionTitle">
            <h1 className="hongKong">Congress</h1>
            <p>Packages</p>
          </div>
          <ul className="pricingCards">
            <li>
              <PricingCard
                price="370"
                title={"Congress"}
                child1={
                  <dv className="packageTitle">
                    <div className="title">Congress</div>
                    <div className="subTitle">Package</div>
                  </dv>
                }
                child2={
                  <div>
                    <p>
                      Meals and Snacks from Aug 16th (dinner) to Aug 20th
                      (breakfast)
                    </p>
                    <p>
                      GALA Dinners (Opening & Closing ceremonies), Cultural
                      Parties, Night Clubs and City Tours
                    </p>
                    <p>Lecture Sessions</p>
                    <p>Lecture Contest Access</p>
                    <p>Local Transportation throughout the Congress</p>
                    <p>Nights of accommodation</p>{" "}
                  </div>
                }
              ></PricingCard>
            </li>

            <li>
              <PricingCard
                price="460"
                color={"var(--primary-color)"}
                child1={
                  <dv className="packageTitle">
                    <div style={{ marginRight: "100%" }} className="hongKong">
                      Pre+
                    </div>
                    <div className="title">Congress</div>
                    <div className="subTitle">Package</div>
                  </dv>
                }
                child2={
                  <div>
                    <p>
                      Meals and Snacks from Aug 14th (dinner) to Aug 20th
                      (breakfast)
                    </p>
                    <p>
                      GALA Dinners (Opening & Closing ceremonies), Cultural
                      Parties, Night Clubs and City Tours
                    </p>
                    <p>Lecture Sessions</p>
                    <p>Lecture Contest Access</p>
                    <p>
                      Local Transportation throughout the Pre-Congress and
                      Congress
                    </p>
                    <p>Nights of accommodation</p>
                  </div>
                }
              ></PricingCard>
            </li>

            <li>
              <PricingCard
                price="520"
                color={"var(--secondary-color)"}
                priceColor="white"
                child1={
                  <div className="packageTitle">
                    <div className="title">Congress</div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "visible",
                        // width: '20px'
                        // height: '200px'
                      }}
                    >
                      <p
                        style={{ color: "var(--primary-color)" }}
                        className="hongKong"
                      >
                        +Post
                      </p>
                      <p className="subTitle"> Package</p>{" "}
                    </div>
                  </div>
                }
                child2={
                  <div>
                    <p>
                      Meals and Snacks from Aug 16th (dinner) to Aug 22st
                      (breakfast)
                    </p>
                    <p>
                      GALA Dinners (Opening & Closing ceremonies), Cultural
                      Parties, Night Clubs and City Tours
                    </p>
                    <p>Lecture Sessions</p>
                    <p>Lecture Contest Access</p>
                    <p>
                      Local Transportation throughout the Pre-Congress and
                      Congress
                    </p>
                    <p>Nights of accommodation</p>
                  </div>
                }
              ></PricingCard>
            </li>

            <li>
              <PremiumPricingCard price="610" title={"Locals only"}>
                <p>Access to Scientific Program</p>
                <p>Access to Exhibition Area</p>
              </PremiumPricingCard>
            </li>
          </ul>
        </div>
    </>
  );
}

export default Packages;

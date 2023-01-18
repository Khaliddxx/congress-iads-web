import React from "react";
import PremiumPricingCard from "../PremiumPricingCard/PremiumPricingCard";
import PricingCard from "../PricingCard/PricingCard";
import "./Packages.scss";

import ticketImage from "../../Assets/Images/Ticket.svg";

function Packages(props) {
  return (
    <>
      <div id="packagesSection" class="packagesSection">
        <div className="packagesSectionTitle">
          <h1 className="LuthonSouthard">Congress</h1>
          <p className="subtitlePack">Packages</p>

          {/* <a href="/form" className="packagesSecCTA">
            Early bird registrations{" "}
          </a>
          <div className="avTickets">
            <img src={ticketImage} />
            available tickets: 80
          </div> */}
        </div>
        <ul className="pricingCards">
          <li>
            <PricingCard
              price="400"
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
                    Meals and Snacks from Feb 19th (dinner) to Feb 24th
                    (breakfast)
                  </p>
                  <p>GALA Party, Opening & Closing Ceremonies</p>
                  <p>Training Sessions & Lecturess</p>
                  <p>Lecture Contest Access</p>
                  <p>Dental Olympics Access</p>
                  <p>5 Nights of accommodation</p>
                  <p>Local Transportation throughout the Congress</p>
                </div>
              }
            ></PricingCard>
          </li>

          <li>
            <PricingCard
              price="520"
              color={"var(--primary-color)"}
              priceColor="white"
              child1={
                <dv className="packageTitle">
                  <div
                    style={{ marginRight: "100%" }}
                    className="LuthonSouthard"
                  >
                    Pre+
                  </div>
                  <div className="title">Congress</div>
                  <div className="subTitle">Package</div>
                </dv>
              }
              child2={
                <div>
                  <p>
                    Meals and Snacks from Feb 17th (dinner) to Feb 24th
                    (breakfast)
                  </p>
                  <p>GALA Party, Opening & Closing Ceremonies</p>
                  <p>Training Sessions & Lectures</p>
                  <p>Lecture Contest Access</p>
                  <p>Dental Olympics Access</p>
                  <p>7 Nights of Accommodation</p>
                  <p>
                    Local Transportation throughout the Pre-Congress and
                    Congress
                  </p>
                  <p>2 day pre-congress activities in Kyrenia</p>
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
                    <p style={{ color: "white" }} className="LuthonSouthard">
                      +Post
                    </p>
                    <p className="subTitle"> Package</p>{" "}
                  </div>
                </div>
              }
              child2={
                <div>
                  <p>
                    Meals and Snacks from Feb 19th (dinner) to Feb26th
                    (breakfast)
                  </p>
                  <p>GALA Dinners, Opening & Closing Ceremonies</p>
                  <p>Training Sessions & Lectures</p>
                  <p>Lecture Contest Access</p>
                  <p>Dental Olympics Access</p>
                  <p>7 Nights of accommodation</p>
                  <p>
                    Local Transportation throughout the Post-Congress and
                    Congress
                  </p>
                  <p>2 day post-congress activities in Famagusta</p>
                </div>
              }
            ></PricingCard>
          </li>

          <li>
            <PremiumPricingCard price="620" title={"Locals only"} color="white">
              <p>
                Meals and Snacks from Feb 17th (dinner) to Feb 26th (breakfast)
              </p>
              <p>GALA Dinners, Opening & Closing Ceremonies</p>
              <p>Training Sessions & Lectures</p>
              <p>Dental Olympics Access</p>
              <p>10 Nights of Accommodation</p>
              <p>
                Local Transportation throughout the Pre-Cong, Congress and
                Post-congress
              </p>
              <p>2 day pre-congress activities in Kyrenia</p>
              <p>2 day post-congress activities in Famagusta</p>
            </PremiumPricingCard>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Packages;

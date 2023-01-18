import React from "react";
import PricingCard from "../../Components/PricingCard/PricingCard";
import MemberCard from "../../Components/MemberCard/MemberCard";
import Header from "../../Components/Header/Header";
import "./Home.scss";
import kazEmb from "../../Assets/Images/kazemb.png";
import kazWallpaper1 from "../../Assets/Images/kazwallpaper.jpg";
import LetterCardImage1 from "../../Assets/Images/lc1.svg";
import LetterCardImage2 from "../../Assets/Images/lc2.svg";
import { Carousel } from "react-bootstrap";
import CongressLogo from "../../Assets/Images/congresslogoLanding.svg";

import member1 from "../../Assets/Images/OrganizingComm/mem1.png";
import member2 from "../../Assets/Images/OrganizingComm/mem2.png";
import member3 from "../../Assets/Images/OrganizingComm/mem3.png";
import member4 from "../../Assets/Images/OrganizingComm/mem4.png";
import member5 from "../../Assets/Images/OrganizingComm/mem5.png";
import member6 from "../../Assets/Images/OrganizingComm/mem6.png";
import member7 from "../../Assets/Images/OrganizingComm/mem7.png";
import member8 from "../../Assets/Images/OrganizingComm/mem8.png";
import member9 from "../../Assets/Images/OrganizingComm/mem9.png";
import member10 from "../../Assets/Images/OrganizingComm/mem10.png";

import calendar from "../../Assets/Images/TabIcons/calendar.svg";
import location from "../../Assets/Images/TabIcons/Vector.svg";
import ticket from "../../Assets/Images/TabIcons/Ticket.svg";
import microphone from "../../Assets/Images/TabIcons/microphone.svg";

import InfoCard from "../../Components/InfoCard/InfoCard";
import Sponsers from "../../Components/Sponsers/Sponsers";
import Footer from "../../Components/Footer/Footer";
import PremiumPricingCard from "../../Components/PremiumPricingCard/PremiumPricingCard";
import Packages from "../../Components/Packages/Packages";

function Home() {
  return (
    <>
      <div className="home">
        {/* main section */}

        <div className="main">
          <div className="mainInner">
            <div className="backgroundImage">
              <div className="mainLogo">
                <img src={CongressLogo} />
              </div>

              <a className="mainCta" href="#packagesSection">
                REGISTER NOW
              </a>
            </div>
            <div className="tab">
              <div className="tabComponent">
                <div className="icon">
                  <img src={calendar} />
                </div>
                <div className="link">
                  february <br></br>
                  19th-24th
                </div>
              </div>
              <div className="tabComponent">
                <div className="icon">
                  <img src={location} />
                </div>
                <div className="link">Northern Cyprus</div>
              </div>
              <div className="tabComponent">
                <div className="icon">
                  <img src={ticket} />
                </div>
                <div className="link">
                  150 <br></br>
                  TICKETS
                </div>
              </div>
              <div className="tabComponent">
                <div className="icon">
                  <img src={microphone} />
                </div>
                <div className="link">SPEAKERS</div>
              </div>
            </div>
          </div>
        </div>

        {/* explore section */}

        <div class="explore">
          <div class="exploreInner">
            <div className="exploreCard">
              <InfoCard
                backgroundColor="white"
                bodyTextColor="#313030"
                ctaColor={"var(--primary-color)"}
                ctaFontColor="white"
                text="In Cyprus, the pearl of Mediterranean….Northern Cyprus (Turkish: Kuzey Kıbrıs), officially the Turkish Republic of Northern Cyprus, comprises the northeastern portion of the island of Cyprus. Northern Cyprus extends from the tip of the Karpass Peninsula in the northeast to Morphou Bay, Cape Kormakitis and its westernmost point, the Kokkina exclave in the west. Its southernmost point is the village of Louroujina."
              >
                <p>Explore</p>
                <h1 className="LuthonSouthard">NorthernCyprus</h1>
              </InfoCard>
            </div>
          </div>
        </div>

        {/* Section 2   */}

        <div id="about" class="about">
          <div class="aboutInner">
            <div className="exploreCard">
              <InfoCard
                backgroundColor={"var(--secondary-color)"}
                bodyTextColor="white"
                ctaColor={"white"}
                text={
                  <div>
                    The congress will include a 5 night stay at Acapulco Hotel
                    where not only a rich scientific program of lectures,
                    workshops, trainings, lecture contests and dental olympics,
                    the token IADS Exchange Fair, the General Assembly and
                    unforgettable gala night will be expecting you; but also an
                    immersion into Northern Cypriot culture with sightseeing,
                    dining at meyhane and if you have yet some energy to consume
                    - clubs and parties!!
                  </div>
                }
              >
                <p style={{ color: "white" }}>About the</p>
                <h1 style={{ color: "white" }} className="LuthonSouthard">
                  Congress
                </h1>
              </InfoCard>
            </div>
          </div>
        </div>

        <div class="pre">
          <div className="preCard">
            <InfoCard
              backgroundColor={"var(--primary-color)"}
              bodyTextColor="white"
              text={
                <div>
                  Pre-congress will start at Girne, a beautiful coastal city of
                  Northern Cyprus which is located in the northmost part of the
                  island. During the pre-congress, you will have a chance to
                  visit the iconic Kyrenia Harbour. This historical place is a
                  horseshoe-shaped area that is surrounded by restaurants and
                  bars that serve tourists in a unique atmosphere. This tiny
                  harbour, full of yachts and fishing boats, is framed by the
                  colossal hulk of its Crusader castle.
                </div>
              }
            >
              <h1 style={{ color: "white" }} className="LuthonSouthard">
                Pre
              </h1>
              <p style={{ color: "white" }}>Congress</p>
            </InfoCard>
          </div>
          <div class="preInner"></div>
        </div>

        <div class="post">
          <div class="postInner"></div>
          <div className="preCard">
            <InfoCard
              backgroundColor="#414141"
              bodyTextColor="white"
              ctaColor={"var(--secondary-color)"}
              ctaFontColor={"white"}
              text="During the post-congress, you will be visiting the old town of Nicosia, which is surrounded by walls built by Venetians to protect themselves from the Ottoman Empire's conquest of the island. This part of the island houses different time periods of the island. You will have the chance to visit the bazaar and be dazzled by the history popping up from every corner of the city."
            >
              <h1 style={{ color: "white" }} className="LuthonSouthard">
                Post
              </h1>
              <p style={{ color: "white " }}>Congress</p>
            </InfoCard>
          </div>
        </div>

        <div class="letterSection">
          <img className="letterSectionCard" src={LetterCardImage1} />

          <div className="letterSectionBody">
            <h1 className="title">Dr. Lamis Elsheikh</h1>
            <p
              className="LuthonSouthard"
              style={{ color: "var(--primary-color)", fontSize: "40px" }}
            >
              Esteemed IADS Members & Alumni,
            </p>
            <p className="body">
              We are delighted to officially announce our 69th Mid-Year Meeting
              2023 has opened its doors to dental students and young
              professionals worldwide. We’d like to extend our invitation for
              you to join us and immerse yourself into this cryptic emissary of
              several ancient civilizations that is Northern Cyprus, in the
              heart of the Mediterranean Sea.
              <br></br>
              <br></br>
              The Local Organizing Committee has been relentlessly working to
              achieve an extraordinary event, with the help of the IADS
              Executive Committee; an event that will provide dental students
              and young professionals a platform to discuss developments and
              current issues in the field of dentistry and public health, while
              at the same time introducing all of us to a blend of rare
              traditions rooted in an impressive cultural heritage. Looking
              forward to seeing you all join our pre-congress trip to Girne,
              attend our general assembly and scientific program in Kyrenia and
              tag along to our post congress experience at the old town of
              Nicosia.
              <br></br>
              <br></br>
              <strong>Dr. Lamis Elsheikh, BDS</strong>
              <br></br>
              <strong>IADS President 2022\23</strong>
            </p>
          </div>
        </div>

        <div style={{ textAlign: "right" }} class="letterSection">
          <div className="letterSectionBody">
            <h1 className="title">Özel Baysen</h1>
            <p
              className="LuthonSouthard"
              style={{ color: "var(--primary-color)", fontSize: "40px" }}
            >
              Dear IADS delegates,{" "}
            </p>
            <p className="body">
              We are all very excited to host the 69th Mid-Year Meeting of IADS
              in our wonderful island for the second time. Our local organising
              committee and IADS Executive Committee are planning an amazing
              congress for you that includes both enjoyable and informative days
              for all of you. Team work makes a dream work.
              <br></br>
              <br></br>
              <strong>Özel Baysen</strong>
              <br />
              <strong>Northern Cyprus Association of Dental Students</strong>
            </p>
          </div>

          <img className="letterSectionCard" src={LetterCardImage2} />
        </div>

        <div id="schedule" className="schedule">
          <div className="scheduleHeader">
            <div className="scheduleTitle">
              <h1 className="LuthonSouthard">Congress</h1>
              <p>Schedule</p>
            </div>
            <a className="scheduleCTA"> View the complete schedule here </a>
          </div>

          {/* <div className="comingSoon hongKong">  Coming Soon </div> */}
          <div className="scheduleInner">
            <div className="scheduleRow">
              <div className="scheduleRowTitle">
                <p style={{ color: "#8FFF37" }}>Pre-congress </p>
                <p className="date">February 17</p>
              </div>
              <div className="border1"></div>
              <div className="description">
                <span style={{ color: "#8FFF37" }}>
                  Pre-Congress attendees:
                </span>{" "}
                Arrival, Check-In, Dinner
              </div>
            </div>

            <div className="scheduleRow">
              <div className="scheduleRowTitle">
                <p style={{ color: "#8FFF37" }}>Pre-congress </p>
                <p className="date">February 18</p>
              </div>
              <div className="border1"></div>
              <div className="description">
                <span style={{ color: "#8FFF37" }}>
                  Pre-Congress attendees:
                </span>{" "}
                Breakfast | Girne Harbour & Castle | Kyrenia Castle | Lunch |
                Bellapais Monastery | Karmi Village | Nima
              </div>
            </div>

            <div className="scheduleRow">
              <div className="scheduleRowTitle">
                <p style={{ color: "#8FFF37" }}>Pre-congress </p>
                <p className="date">February 19</p>
              </div>
              <div className="border1"></div>
              <div className="description">
                <span style={{ color: "#8FFF37" }}>
                  Pre-Congress attendees:
                </span>{" "}
                Breakfast | Free Time | Lunch | Gillham Vineyard | Free Time |
                Dinner
              </div>
            </div>

            <div className="scheduleRow">
              <div className="scheduleRowTitle">
                <p style={{ color: "#FDBE3D" }}>Congress </p>
                <p className="date">February 19</p>
              </div>
              <div className="border1"></div>
              <div className="description">
                <span style={{ color: "#FDBE3D" }}>Congress attendees:</span>{" "}
                Arrival & Check-In | Dinner | Opening Ceremony
              </div>
            </div>

            <div className="scheduleRow">
              <div className="scheduleRowTitle">
                <p style={{ color: "#FDBE3D" }}>Congress </p>
                <p className="date">February 20</p>
              </div>
              <div className="border1"></div>
              <div className="description">
                Breakfast | General Assembly Day 1 | Lunch | Free Time | Club
              </div>
            </div>

            <div className="scheduleRow">
              <div className="scheduleRowTitle">
                <p style={{ color: "#FDBE3D" }}>Congress </p>
                <p className="date">February 21</p>
              </div>
              <div className="border1"></div>
              <div className="description">
                Breakfast | General Assembly Day 2 | Lunch | Free Time | Dinner
                | Exchange Fair
              </div>
            </div>

            <div className="scheduleRow">
              <div className="scheduleRowTitle">
                <p style={{ color: "#FDBE3D" }}>Congress </p>
                <p className="date">February 22</p>
              </div>
              <div className="border1"></div>
              <div className="description">
                Breakfast | General Assembly Day 2 | Lunch | Free Time | Dinner
                | Exchange Fair
              </div>
            </div>

            <div className="scheduleRow">
              <div className="scheduleRowTitle">
                <p style={{ color: "#FDBE3D" }}>Congress </p>
                <p className="date">February 23</p>
              </div>
              <div className="border1"></div>
              <div className="description">
                Breakfast | Scientific Day 2 | Lunch | Training Sessions |
                Lecture Contest | Dental Olympics | Dinner | Gala Night
              </div>
            </div>

            <div className="scheduleRow">
              <div className="scheduleRowTitle">
                <p>Departure </p>
                <p className="date">February 24</p>
              </div>
              <div className="border1"></div>
              <div className="description">
                <span style={{ color: "#FDBE3D" }}>Congress attendees: </span>
                Breakfast | Departure
                <br></br>
                <span style={{ color: "#8FFF37" }}>
                  Pre-Congress attendees:{" "}
                </span>
                Breakfast | Departure
              </div>
            </div>

            <div className="scheduleRow">
              <div className="scheduleRowTitle">
                <p style={{ color: "#FF8CDF" }}>Post-Congress </p>
                <p className="date">February 24</p>
              </div>
              <div className="border1"></div>
              <div className="description">
                <span style={{ color: "#FF8CDF" }}>
                  Post-Congress attendees:{" "}
                </span>{" "}
                Breakfast | Transfer to Nicosia | City Tour | Lunch | Samanbahçe
                Tour | Famagusta Old City Tour | Aspava Tavern | Free Time
              </div>
            </div>

            <div className="scheduleRow">
              <div className="scheduleRowTitle">
                <p style={{ color: "#FF8CDF" }}>Post-Congress </p>
                <p className="date">February 25</p>
              </div>
              <div className="border1"></div>
              <div className="description">
                <span style={{ color: "#FF8CDF" }}>
                  Post-Congress attendees:{" "}
                </span>{" "}
                Breakfast | Kapalı Maraş Tour | Salamis Tour | Othello Castle |
                St Barnabas | Bar | Free Time
              </div>
            </div>

            <div className="scheduleRow">
              <div className="scheduleRowTitle">
                <p style={{ color: "#FF8CDF" }}>Post-Congress </p>
                <p className="date">February 26</p>
              </div>
              <div className="border1"></div>
              <div className="description">
                <span style={{ color: "#FF8CDF" }}>
                  Post-Congress attendees:{" "}
                </span>{" "}
                Breakfast | Departures
              </div>
            </div>
          </div>
        </div>

        <Packages />

        <section class="membersSection">
          <div className="membersSectionTitle">
            <p className="LuthonSouthard">Meet the</p>
            <div className="subTitle">
              <p>Local Organizing</p>
              <p>Committee</p>
            </div>
          </div>
          <div class="container">
            <ul class="membersList">
              <MemberCard
                name="Mustafa Hacılar"
                position="AC Chairperson"
                img={member1}
              />
              <MemberCard
                name="Özel Baysen"
                position="head organizer"
                img={member2}
              />
              <MemberCard
                name="Sedat Burak Gultepe"
                position="Organizer"
                img={member3}
              />
              <MemberCard
                name="İsmet Ersalıcı"
                position="Treasurer"
                img={member4}
              />
              <MemberCard
                name="Serra Özdenak"
                position="Head of Scientific"
                img={member5}
              />

              <MemberCard
                name="Bersun Elif Ozer"
                position="Contact Person"
                img={member6}
              />
              <MemberCard
                name="Baris Veysel Sendur"
                position="Head of Logistics"
                img={member7}
              />
              <MemberCard name="Emre Ünlü" position="Editor" img={member8} />
              <MemberCard
                name="Ali El Kasım"
                position="Head of Social Affairs"
                img={member9}
              />
              <MemberCard
                name="İrem TÜrkan"
                position="Advisor"
                img={member10}
              />
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;

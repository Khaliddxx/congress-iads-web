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
import CongressLogo from "../../Assets/Images/congresslogoLanding.png";
import InfoCard from "../../Components/InfoCard/InfoCard";
import LetterCard from "../../Components/LetterCard/LetterCard";
import Sponsers from "../../Components/Sponsers/Sponsers";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <div className="home">
        <Header />

        {/* main section */}

        <div className="main">
          <div className="mainInner">
            <div className="backgroundImage">
              <div className="mainLogo">
                <img src={CongressLogo} />
              </div>

              <a className="mainCta">REGISTER NOW</a>
            </div>
            <div className="tab"></div>
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
              >
                <p>Explore</p>
                <h1 className="hongKong">Kazakhstan</h1>
              </InfoCard>
            </div>
          </div>
        </div>

        {/* Section 2   */}

        <div class="about">
          <div class="aboutInner">
            <div className="exploreCard">
              <InfoCard
                backgroundColor="#01838C"
                bodyTextColor="white"
                ctaColor={"var(--primary-color)"}
              >
                <p style={{ color: "white" }}>About the</p>
                <h1
                  style={{ color: "var(--primary-color)" }}
                  className="hongKong"
                >
                  Congress
                </h1>
              </InfoCard>
            </div>
          </div>
        </div>

        <div class="pre">
          <div className="preCard">
            <InfoCard backgroundColor="#FDBE3D">
              <h1
                style={{ color: "var(--secondary-color)" }}
                className="hongKong"
              >
                Pre
              </h1>
              <p style={{ color: "#1C1C1C " }}>Congress</p>
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
            >
              <h1
                style={{ color: "var(--primary-color)" }}
                className="hongKong"
              >
                Post
              </h1>
              <p style={{ color: "white " }}>Congress</p>
            </InfoCard>
          </div>
        </div>

        <div class="letterSection">
          <img className="letterSectionCard" src={LetterCardImage1} />

          <div className="letterSectionBody">
            <h1 className="title">Dr. Huthaifa Abdul qader </h1>
            <p className="hongKong">Dear readers, </p>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
              a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
              risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
              Maecenas eget condimentum velit, sit amet feugiat lectus. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
              scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
              rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
              convallis convallis diam sit amet lacinia. Aliquam in elementum
              tellus.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "right" }} class="letterSection">
          <div className="letterSectionBody">
            <h1 className="title">Zhengis Zhamashev</h1>
            <p className="hongKong">Dear readers, </p>
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
              a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
              risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
              Maecenas eget condimentum velit, sit amet feugiat lectus. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
              scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
              rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
              convallis convallis diam sit amet lacinia. Aliquam in elementum
              tellus.
            </p>
          </div>

          <img className="letterSectionCard" src={LetterCardImage2} />
        </div>

        <div className="schedule">
          <div className="scheduleHeader">
            <div className="scheduleTitle">
              <h1 className="hongKong">Congress</h1>
              <p>Schedule</p>
            </div>
            <a className="scheduleCTA"> View the complete schedule here </a>
          </div>
          <div className="scheduleInner">
            {[...Array(10)].map((elementInArray, index) => (
              <div className="scheduleRow">
                <div className="scheduleRowTitle">
                  <p>Pre-congress </p>
                  <p className="date">August 00</p>
                </div>
                <div className="border1"></div>
                <div className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla
                </div>
              </div>
            ))}
          </div>
        </div>

        <section class="packagesSection">
          <div className="packagesSectionTitle">
            <h1 className="hongKong">Congress</h1>
            <p>Packages</p>
          </div>
          <ul className="pricingCards">
            <li>
              <PricingCard title={"Congress"}>
                <p>
                  Meals and Snacks from Aug 16th (dinner) to Aug 20th
                  (breakfast)
                </p>
                <p>
                  GALA Dinners (Opening & Closing ceremonies), Cultural Parties,
                  Night Clubs and City Tours
                </p>
                <p>Lecture Sessions</p>
                <p>Lecture Contest Access</p>
                <p>Local Transportation throughout the Congress</p>
                <p>Nights of accommodation</p>
              </PricingCard>
            </li>

            <li>
              <PricingCard
                title={"Pre-Congress + Congress"}
                color={"var(--primary-color)"}
              >
                <p>
                  Meals and Snacks from Aug 14th (dinner) to Aug 20th
                  (breakfast)
                </p>
                <p>
                  GALA Dinners (Opening & Closing ceremonies), Cultural Parties,
                  Night Clubs and City Tours
                </p>
                <p>Lecture Sessions</p>
                <p>Lecture Contest Access</p>
                <p>
                  Local Transportation throughout the Pre-Congress and Congress
                </p>
                <p>Nights of accommodation</p>
              </PricingCard>
            </li>

            <li>
              <PricingCard
                title={"Congress + Post Congress"}
                color={"var(--secondary-color)"}
              >
                <p>
                  Meals and Snacks from Aug 16th (dinner) to Aug 22st
                  (breakfast)
                </p>
                <p>
                  GALA Dinners (Opening & Closing ceremonies), Cultural Parties,
                  Night Clubs and City Tours
                </p>
                <p>Lecture Sessions</p>
                <p>Lecture Contest Access</p>
                <p>
                  Local Transportation throughout the Pre-Congress and Congress
                </p>
                <p>Nights of accommodation</p>
              </PricingCard>
            </li>

            <li>
              <PricingCard title={"Locals only"}>
                <p>Access to Scientific Program</p>
                <p>Access to Exhibition Area</p>
              </PricingCard>
            </li>
          </ul>
        </section>

        <section class="membersSection">
          <div className="membersSectionTitle">
            <p className="hongKong">Meet the</p>
            <div className="subTitle">
              <p>Local Organizing</p>
              <p>Committee</p>
            </div>
          </div>
          <div class="container">
            <ul class="membersList">
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </ul>
          </div>
        </section>

        <Sponsers />
        <Footer />
      </div>
    </>
  );
}

export default Home;

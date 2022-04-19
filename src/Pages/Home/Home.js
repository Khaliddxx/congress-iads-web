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
import member1 from "../../Assets/Images/OrganizingComm/Arman Baimbetov.jpg";
import member2 from "../../Assets/Images/OrganizingComm/Zhengis Zhamashev.JPG";

import member3 from "../../Assets/Images/OrganizingComm/Abay Kalymtai.png";
import member4 from "../../Assets/Images/OrganizingComm/Zhuldyz Kabizhankyzy.JPG";
import member5 from "../../Assets/Images/OrganizingComm/Darina Lysakova.JPG";

import member6 from "../../Assets/Images/OrganizingComm/Nurai Serikkyzy.JPG";
import member7 from "../../Assets/Images/OrganizingComm/Anel Azhigaliyeva.JPG";
import member8 from "../../Assets/Images/OrganizingComm/Darya Yavuz.png";
import member9 from "../../Assets/Images/OrganizingComm/Asylai Nauryzova.JPG";
import member10 from "../../Assets/Images/OrganizingComm/IMG_3203.JPG";

import member11 from "../../Assets/Images/OrganizingComm/Aigerim Kenzhebek.JPG";
import member12 from "../../Assets/Images/OrganizingComm/Ayazhan Shalkhybayeva.JPG";
import member13 from "../../Assets/Images/OrganizingComm/Sardar Srazhadin.JPG";

import InfoCard from "../../Components/InfoCard/InfoCard";
import Sponsers from "../../Components/Sponsers/Sponsers";
import Footer from "../../Components/Footer/Footer";
import PremiumPricingCard from "../../Components/PremiumPricingCard/PremiumPricingCard";

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

              <a className="mainCta">REGISTER NOW</a>
            </div>
            <div className="tab">
              <div className="tabComponent">
                <div className="icon"></div>
                <div className="link">Date</div>
              </div>
              <div className="tabComponent">
                <div className="icon"></div>
                <div className="link">Location</div>
              </div>
              <div className="tabComponent">
                <div className="icon"></div>
                <div className="link">No. of tickets</div>
              </div>
              <div className="tabComponent">
                <div className="icon"></div>
                <div className="link">No. of speakers</div>
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

        <div class="packagesSection">
          
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
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'visible',
                        // width: '20px'
                        // height: '200px'
                      }}
                    >
                      <p style={{color: 'var(--primary-color)'}} className="hongKong">
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
              <MemberCard
                name="Arman Baimbetov"
                position="AC Chairperson"
                img={member1}
              />
              <MemberCard
                name="Zhengis Zhamashev"
                position="head organizer"
                img={member2}
              />
              <MemberCard
                name="Abay Kalymtai"
                position="Vice-Chair"
                img={member3}
              />
              <MemberCard
                name="Zhuldyz Kabizhankyzy"
                position="Vice-Chair for sections"
                img={member4}
              />
              <MemberCard
                name="Darina Lysakova"
                position="Secretary"
                img={member5}
              />

              <MemberCard
                name="Nurai Serikkyzy"
                position="Guides coordinator & Accommodation and Venue"
                img={member6}
              />
              <MemberCard
                name="Anel Azhigaliyeva"
                position="Fundraising coordinator"
                img={member7}
              />
              <MemberCard
                name="Dar’ya Yavuz"
                position="IT coordinator (Publications team, IT team, Design team)"
                img={member8}
              />
              <MemberCard
                name="Asylai Nauryzova"
                position="IT coordinator (Publications team, IT team, Design team)"
                img={member9}
              />
              <MemberCard
                name="Dariga Ospanova"
                position="IT coordinator (Publications team, IT team, Design team)"
                img={member10}
              />

              <MemberCard
                name="Aigerim Kenzhebekz"
                position="Social program coordinator"
                img={member11}
              />
              <MemberCard
                name="Ayazhan Shalkhybayeva"
                position="Registration coordinator"
                img={member12}
              />
              <MemberCard
                name="Sardar Srazhadin"
                position="Logistics coordinator"
                img={member13}
              />
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

import React from "react";
import PricingCard from "../../Components/PricingCard/PricingCard";
import MemberCard from "../../Components/MemberCard/MemberCard";
import Header from "../../Components/Header/Header";
import "./Home.scss";
import kazEmb from "../../Assets/Images/kazemb.png";
import kazWallpaper1 from "../../Assets/Images/kazwallpaper.jpg";
import LetterCardImage1 from "../../Assets/Images/lc1.png";
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
                  August <br></br>
                  16th-19th
                </div>
              </div>
              <div className="tabComponent">
                <div className="icon">
                  <img src={location} />
                </div>
                <div className="link">Kazakhstan</div>
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
                text="Kazakhstan is the world’s ninth largest country where East and West have merged in a unique harmony under an endlessly blue sky. The word of a Turkic origin “Kazakh” means “Free man”- this is connected with the fact that since the very ancient times Kazakhstan has been inhabited by freedom-loving nomads."
              >
                <p>Explore</p>
                <h1 className="hongKong">Kazakhstan</h1>
              </InfoCard>
            </div>
          </div>
        </div>

        {/* Section 2   */}

        <div id="about" class="about">
          <div class="aboutInner">
            <div className="exploreCard">
              <InfoCard
                backgroundColor="#01838C"
                bodyTextColor="white"
                ctaColor={"var(--primary-color)"}
                text={
                  <div>
                    <strong>Kazakh National Medical University</strong>, named after S.D.
                    Asfendiyarov, well-known scientists and teachers of
                    Kazakhstan, academicians of the National Academy of Sciences
                    of the Republic of Kazakhstan, the Russian Academy of
                    Medical Sciences, the Academy of Preventive Medicine of the
                    Republic of Kazakhstan, International Academies, honored
                    workers of science and education, honored doctors and
                    pharmacists work.
                  </div>
                }
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
            <InfoCard
              backgroundColor="#FDBE3D"
              text={
                <div>
                  The <strong>'Medeo'</strong> complex is located on the border
                  of the city of Almaty at an altitude of 1691 meters above sea
                  level. Beautiful views of the tops of the Zailiysky Ala Tau
                  mountains, clean air, soft sun - Almaty residents of all ages
                  and occupations love to spend their time here. Medeo got its
                  name in honor of a nomad who lived here at the beginning of
                  the twentieth century and founded an aul (village) in that
                  area.
                </div>
              }
            >
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
              text="Among the snow-white mountain peaks, where the Zailiysky Alatau and Kungei-Alatau ridges join, in a small bridge of Kolsai gorge, there are hidden natural diamonds of the nature of picturesque Kazakhstan - Kolsai Lakes. Surrounded by majestic centuries-old fir trees, the three lakes shine in the light of the bright mountain sun, completely justifying their title 'Pearl of the Northern Tien Shan'."
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
            <p className="hongKong">Dear IADS Members & Alumni, </p>
            <p className="body">
              Greetings from Switzerland! <br></br> We are very thrilled to
              announce our official 69th Annual Congress campaign for 2022. This
              event marks the first formal IADS Annual Congress after the
              pandemic crisis. Our network of dental students and early-career
              professionals have been waiting for this congregation for a long
              time and it is now finally taking place in the city of Almaty in
              Kazakhstan, where the Alma-Ata Declaration of 1978 emerged as a
              major milestone of the twentieth century in the field of public
              health.
              <br></br>
              <br></br>
              The Local Organizing Committee (LOC) is fully amenable to lay out
              all aspects necessary for the successful implementation of this
              global dental students congress under the patronage of IADS
              Executive Committee. Both teams will work collectively with the
              spirit of teamwork and professionalism to bring about one of the
              most well-organized and informative events that gathers students
              and young dentists under one roof. The theme of this AC is
              Artificial Intelligence & Digitalization in Dentistry so you do
              not want to miss this!
              <br></br>
              <br></br>
              We are very delighted to see you all joining our pre-congress trip
              to the mountain resort “Modeo”, attending our General Assembly &
              Scientific Program at KAZANMU (Kazakh National Medical
              University), and coming along to our post-congress experience at
              Kolsay Lakes where we will be spending our last night together! So
              pack your bags for a once in a lifetime experience!
              <br></br>
              <br></br>
              <strong>Huthaifa Abdul Qader, DDS </strong>
              <br></br>
              <strong>IADS President 2021/22</strong>
            </p>
          </div>
        </div>

        <div style={{ textAlign: "right" }} class="letterSection">
          <div className="letterSectionBody">
            <h1 className="title">Zhengis Zhamashev</h1>
            <p className="hongKong">Greetings to all, Dear Friends! </p>
            <p className="body">
              We set ourselves big goals and do our best to achieve them. We
              joined IADS only last year, and already this year we’re preparing
              for a grand 69th Annual Congress of IADS in the beautiful city of
              Almaty, located in the south of Kazakhstan. The IADS Executive
              Committee and the Local Organizing Committee are preparing
              something unusual and large-scale for you. We believe that with
              every action we take, we contribute to the community of young
              dentists around the world. The Kazakhstan Association of Dental
              Young is one of the youngest associations, but it consists of the
              most powerful dental enthusiasts who create new directions in
              science, business and public health. Together is better.
              <br></br>
              <br></br>
              Best regards,
              <br></br>
              <strong>
                President of Kazakhstan Association of Dental Youth
              </strong>
              <br></br>
              <strong>Zhengis Zhamashev</strong>
            </p>
          </div>

          <img className="letterSectionCard" src={LetterCardImage2} />
        </div>

        <div id="schedule" className="schedule">
          <div className="scheduleHeader">
            <div className="scheduleTitle">
              <h1 className="hongKong">Congress</h1>
              <p>Schedule</p>
            </div>
            <a className="scheduleCTA"> View the complete schedule here </a>
          </div>

        <div className="comingSoon hongKong">  Coming Soon </div>
          {/* <div className="scheduleInner">
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
          </div> */}
        </div>

    
















    <Packages />

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

       
      </div>
    </>
  );
}

export default Home;

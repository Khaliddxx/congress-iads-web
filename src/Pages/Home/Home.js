import React from "react";
import PricingCard from "../../Components/PricingCard/PricingCard";
import "./Home.scss";
import kazEmb from "../../Assets/Images/kazemb.png";
import CongressLogo1 from "../../Assets/Images/congresslogo1.png";

function Home() {
  return (
    <>
      <section class="navbar">
        <div class="container">
          <a class="logo" href="#">
            IADS<span> CONGRESS</span>
          </a>
          <img
            id="mobileCta"
            class="mobileMenu"
            src="images/menu.svg"
            alt="Open Menu"
          />
          <nav>
            <img
              id="mobileExit"
              class="mobileMenuExit"
              src="images/exit.svg"
              alt="Close Menu"
            />
            <ul class="primaryNav">
              <li class="current">
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Program</a>
              </li>
              <li>
                <a href="#">Registration</a>
              </li>

              <li>
                <a href="#">Transportation</a>
              </li>

              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>

            <ul class="secondary-nav">
              <li class="go-premium-cta">
                <a href="#">Register</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* main section */}

      <section class="main">
        <div class="container">
          <div class="mainInner">
            {/* <img src={CongressLogo1} /> */}

            <div class="leftCol">
              <p class="subhead">IADS Congress</p>
              <h1>Congress Kazakhstan 2022</h1>

              <div class="mainCta">
                <a href="#" class="primaryCta">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* explore section */}

      <section class="explore">
        <div class="container">
          <div class="exploreInner">
            <div class="leftCol">
              <h1>Congress Kazakhstan 2022</h1>

              <div class="mainCta">
                <h3>
                  Kazakhstan is a unique region in the world because of its
                  history, geographical position, and size. Being the world’s
                  9th largest country and located in the centre of Eurasia and
                  also the largest landlocked country in the world. The unique
                  culture, the traditions, the rituals, the art and all attracts
                  many tourists in every corner of the country.
                </h3>
              </div>
            </div>

            <div className="rightCol">
              <img src={kazEmb} />
            </div>

            <div></div>
          </div>
        </div>
      </section>

      {/* Section 2   */}

      <section class="membersSection">
        <div class="container">
          <ul class="membersList">
            <li>Feature</li>
            <li>Feature</li>
            <li>Feature</li>
            <li>Feature</li>
            <li>Feature</li>
            <li>Feature</li>
          </ul>
        </div>
      </section>

      <section class="packagesSection">
        <div class="container">
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
              <PricingCard title={"Pre-Congress + Congress"}>
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
              <PricingCard title={"Congress + Post Congress"}>
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
              <PricingCard title={"Pre-Congress + Congress + Post-Congress"}>
                <p>
                  Meals and Snacks from Aug 14th (dinner) to Aug 22nd
                  (breakfast)
                </p>
                <p>
                  GALA Dinners (Opening & Closing ceremonies), Cultural Parties,
                  Night Clubs and City Tours{" "}
                </p>
                <p>Lecture Sessions</p>
                <p>Lecture Contest Access</p>
                <p>
                  Local Transportation from the Pre-Congress to Post-Congress
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
        </div>
      </section>
    </>
  );
}

export default Home;

import React from "react";
import "./SponsorsPage.scss";

import goldKsa from "./gold_ksa.svg";
import silverZeiss from "./Zeiss Logo.svg";
import silverCJ from "./CJ_logo.svg";
import silverProteco from "./silver_proteco.svg";
import bronzeJaqan from "./bronze_jaqan.svg";

import s1 from "./General Sponsors/s1.svg";
import s2 from "./General Sponsors/s2.svg";
import s3 from "./General Sponsors/s3.svg";
import s4 from "./General Sponsors/s4.svg";
import s5 from "./General Sponsors/s5.svg";
import s6 from "./General Sponsors/s6.svg";

import Sponsors from "../../Components/Sponsers/Sponsers";

const SponsorsPage = () => {
  return (
    <div className="sponsors-page">
      <div className="header">
        <p className="hongKong title">Congress</p>
        <p className="subtitle">Sponsors</p>
      </div>

      <div className="gold container-fluid">
        <p className="subtitle" style={{ letterSpacing: "5px" }}>
          Gold
        </p>
        <p className="subsubtitle">Sponsors</p>
      </div>
      <div className="content container">
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <img src={goldKsa} />
            <a
              href="https://www.ksa-fdi.kz"
              style={{ marginTop: "90px" }}
              className="btn subtitle"
            >
              Official Website
            </a>
          </div>
          <div className="col">
            <p className="temp">
              Kazakhstan Stomatological Association (KSA) - is the sponsor of
              the "gold" level of the 69th Annual Congress of IADS.
              <br />
              <br />
              Some facts about KSA:
              <br />
              KSA - was founded on December 25, 1991. KSA has been a member of
              the FDI since 1995 <br />
              KSA today is a conductor of innovative dental technologies in
              Kazakhstan <br />
              Since 1996 members of the KSA have participated in many European
              and world dental forums. <br />
              The result of work in the international arena is that today the
              latest achievements of science and technology in the field of
              dentistry have been successfully put into practice in Kazakhstan.{" "}
              <br />
              The first president of the KSA was Professor Temirbaev M.A., and
              the current president is Ospanova D.S. <br /> <br />
              KSA is an organization that pays special attention to the younger
              generation, supporting young professionals in all endeavors.{" "}
              <br />
              <br />
              We express our deepest gratitude to the “Kazakhstan Stomatological
              Association” for their support in holding the 69th Annual Congress
              of IADS.
            </p>
          </div>
        </div>
      </div>

      <div className="silver container-fluid">
        <p className="subtitle" style={{ letterSpacing: "5px" }}>
          Silver
        </p>
        <p className="subsubtitle">Sponsors</p>
      </div>
      <div className="content container">
        <div className="row">
          <div className="col">
            <p>
              The medical technology business of ZEISS offers a comprehensive
              line of medical loupes and surgical microscopes for dentistry.
              Surgical microscope technology from ZEISS provides medical
              professionals with clear visibility of minute details and fine
              structures in regions that are otherwise difficult to view. ZEISS
              products are designed to enable dentists and dental surgeons to
              visualize high-contrast and natural images and enhance the quality
              of examination and treatment in all dental disciplines.
            </p>
          </div>
          <div
            className="col-lg-5 col-sm-12"
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyItems: "flex-end",
              alignItems: "center",
              marginRight: "100px",
            }}
          >
            <img
              style={{ width: "281px", height: "300px" }}
              src={silverZeiss}
            />
            <a
              href="https://www.zeiss.com/meditec/int/specialties/dentistry.html?utm_source=iads&utm_medium=website&utm_campaign=iads-partnerschaft&utm_term=partnership"
              style={{ marginTop: "30px" }}
              className="btn subtitle"
            >
              Official Website
            </a>
          </div>
        </div>
      </div>
      <div className="content container">
        <div className="row">
          <div className="col">
            <p>
              Dentistry is changing at the same rapid pace as the rest of the
              world. Twenty years ago we stood on the threshold of a new era -
              the era of magnification, ergonomics and digital technologies.
              <br />
              <br />
              Everything that seemed like the future , has become the ordinary
              present today.
              <br />
              <br />
              Even recently, individual optics and microscopes were outlandish
              items in a few clinics, and even today, work in any specialization
              can not be imagined without magnification.
              <br />
              <br />
              Digital impressions seemed like a fantasy – now more and more
              clinics are switching to digital, because modern software allows
              you to get high-quality and predictable results in a digital
              protocol.
            </p>
          </div>
          <div
            className="col-lg-5 col-sm-12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "flex-start",
              alignItems: "center",
              // marginRight: "100px",
            }}
          >
            <img
              className="logo"
              style={{ width: "434px", height: "118px" }}
              src={silverCJ}
            />
            <div style={{ marginTop: "50px" }} className="btn subtitle">
              Official Website
            </div>
          </div>
        </div>
      </div>
      <div className="content container">
        <div className="row">
          <div className="col">
            <p style={{ textAlign: "right" }}>Description Coming Soon!</p>
          </div>
          <div
            className="col-lg-5 col-sm-12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "flex-start",
              alignItems: "center",
              // marginRight: "100px",
            }}
          >
            <img
              className="logo"
              style={{ width: "495px", height: "71px" }}
              src={silverProteco}
            />
            <a
              href="https://proteco.kz"
              style={{ marginTop: "20px" }}
              className="btn subtitle"
            >
              Official Website
            </a>
          </div>
        </div>
      </div>

      <div className="bronze container-fluid">
        <p
          className="subtitle"
          style={{ color: "white", letterSpacing: "5px" }}
        >
          Bronze
        </p>
        <p style={{ color: "white" }} className="subsubtitle">
          Sponsors
        </p>
      </div>

      <div className="content container">
        <div className="row">
          <div
            className="col-lg-5 col-sm-12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "flex-start",
              alignItems: "center",
              // marginRight: "100px",
            }}
          >
            <img
              style={{ width: "163px", height: "240px" }}
              src={bronzeJaqan}
            />
            <a
              href="https://jaqandw.kz"
              style={{ marginTop: "30px" }}
              className="btn subtitle"
            >
              Official Website
            </a>
          </div>
          <div className="col">
            <p className="temp">
              JAQAN Dental World is a manufacturing company focused on improving
              dental and medical simulators for hands-on training of dentists
              and surgeons in various fields. We rely on evidence-based
              dentistry and medicine. We started our work at the beginning of
              2021. The company is located in Almaty, Kazakhstan. The unique
              location of our company allows us to cover the dental markets of
              the CIS and countries of Europe and Southeast Asia.
            </p>
          </div>
        </div>
      </div>

      <div className="general container-fluid">
        <p
          className="subtitle"
          style={{ color: "white", letterSpacing: "5px" }}
        >
          General
        </p>
        <p style={{ color: "white" }} className="subsubtitle">
          Sponsors
        </p>
      </div>

      <div className="content container flexx">
        <img src={s1} />
        <img src={s2} />
        <img src={s3} />
        <img src={s4} />
        <img src={s5} />
        <img src={s6} />
      </div>
    </div>
  );
};

export default SponsorsPage;

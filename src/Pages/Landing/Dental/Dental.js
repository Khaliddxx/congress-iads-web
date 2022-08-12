import React, { useState } from "react";
import "./Dental.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Pagination, Mousewheel } from "swiper";
import pic1 from "../../../Assets/Images/Dental/1.jpeg";
import pic2 from "../../../Assets/Images/Dental/2.jpeg";
import pic3 from "../../../Assets/Images/Dental/3.jpeg";
import pic4 from "../../../Assets/Images/Dental/4.jpeg";
import pic5 from "../../../Assets/Images/Dental/5.jpeg";
import pic6 from "../../../Assets/Images/Dental/6.jpeg";
import pic7 from "../../../Assets/Images/Dental/7.jpeg";
import pic8 from "../../../Assets/Images/Dental/8.jpeg";
import pic9 from "../../../Assets/Images/Dental/9.jpeg";

import pic21 from "../../../Assets/Images/Dental/21.png";
import pic22 from "../../../Assets/Images/Dental/22.png";
import pic23 from "../../../Assets/Images/Dental/23.png";
import pic24 from "../../../Assets/Images/Dental/24.png";

import TH1 from "../../../Assets/Images/Thumbnails/Thumbnail3.png";
import TH2 from "../../../Assets/Images/Thumbnails/Thumbnail4.png";
import TH3 from "../../../Assets/Images/Thumbnails/Thumbnail9.png";
import TH4 from "../../../Assets/Images/Thumbnails/Thumbnail10.png";

function Dental() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="dentalPage">
        <div className="aboutPageMain container">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src={pic1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic5} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic6} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic7} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic8} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic9} />
            </SwiperSlide>
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3.2}
            // freeMode={false}
            // watchSlidesProgress={true}
            mousewheel={true}
            modules={[FreeMode, Navigation, Thumbs, Mousewheel]}
            className="mySwiper"
            direction="vertical"
          >
            <SwiperSlide>
              <img src={pic1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic5} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic6} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic7} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic8} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic9} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="dentalPageSecond container">
          <div className="dentalPageSecondTitle">
            <div className="dentalPageSecondTitleMain">
              <p className="hongKong dentalPageSecondTitle2">Dental</p>
              <p className="dentalPageSecondTitle1">Olympics </p>
            </div>

            <a href="/landing/dental/form" className="dentalCTA">
              Apply now
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "100px",
            }}
          >
            <p className="dentalPageSecondBody">
              Dental Olympics are olympic games exclusively brought to you by
              the Vice President of Science & Research (VPSR) along with SCORE
              and the National Scientific Officer (NSO) of the host country.
              With different competitive categories such as orthodontic wire
              bending, wax carving, dental kahoot and not only; several teams
              from different countries compete against each-other to the final
              champion.
            </p>
            {/* <a className="dentalCTA dentalCTAButtom">Dental Olympics rules</a> */}
          </div>

          <div class="table-responsive">
            <table class="table1">
              <thead className="thead">
                <tr>
                  <th scope="col">TIME</th>
                  <th scope="col">EVENT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>14:00 -14:20</td>
                  <td>
                    Opening (Speeches of President, Vice President of Science &
                    Research, Head of Jury)
                  </td>
                </tr>
                <tr>
                  <td>14:20 - 14:35</td>
                  <td>Round 1：Radiography Interpretation (5 questions) </td>
                </tr>
                <tr>
                  <td>14:40 - 14:55</td>
                  <td>
                    Round 2：Oral Surgery Suture on Silicone Model (5 types){" "}
                  </td>
                </tr>

                <tr>
                  <td>15:00 - 15:20</td>
                  <td>Round 3：Soap Carving, Direct Restoration</td>
                </tr>

                <tr>
                  <td>15:25 - 15:40</td>
                  <td>Round 4：Orthodontic Wire Bending</td>
                </tr>

                <tr>
                  <td>15:55-16:15</td>
                  <td>Round 5: Theoretical (Kahoot)</td>
                </tr>
                <tr>
                  <td>16:20 - 16:40</td>
                  <td>
                    Closing and Awarding (Evaluation and Announcement of the
                    Winners)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bulletPoints">
            <div className="pagetitles">
              <p style={{ color: "#01838C" }} className="hongKong pagetitle1">
                Team
              </p>
              <p className="pagetitle2">Form</p>
            </div>

            <div className="bulletPointsBody">
              <ol>
                <li>
                  Each team should have 3 members. Team members should all be
                  STUDENTS. Dentists will not be able to compete in the contest
                  (Dentist up to 2 years after graduation can join)
                </li>
                <li>Each country can only register one team.</li>
                <li>
                  {" "}
                  Students compete in Round 1 as a TEAM, but individually in the
                  rest.
                </li>
                <li>
                  From Round 2~5, 1 member competes in 1 round individually.
                  Other team members must stay beside the tables, assisting the
                  competing member.
                </li>
              </ol>
            </div>
          </div>

          <div className="rulesRound">
            <div className="pagetitles">
              <p style={{ color: "#FDBE3D" }} className="hongKong pagetitle1">
                Rules of
              </p>
              <p className="pagetitle2">Each round</p>
            </div>
            <div className="rulesRoundBody">
              <div className="rulesRoundBodyInd">
                <div className="rulesRoundBodyTxt">
                  <p className="rulesRoundBodyTxt1">
                    Round 1: Radiography Interpretation
                  </p>
                  <ul>
                    <li className="rulesRoundBodyTxt1">
                      In this round, the students try to guess the given points
                      on 10 radiographic images. The students should compete as
                      a team in this round. The radiographs could be either
                      panaromic, periapical or occlusal X-rays. The questions
                      will be projected. Each image will be screened for 2
                      minutes. Teams can discuss among themselves and should
                      write their final answer on the paper.
                    </li>
                  </ul>
                </div>

                <img src={pic21} />
              </div>

              <div className="rulesRoundBodyInd">
                <div className="rulesRoundBodyTxt">
                  <p className="rulesRoundBodyTxt1">
                    Round 2: Oral Surgery Suture (on Sponge)
                  </p>
                  <ul>
                    <li className="rulesRoundBodyTxt1">
                      Students should complete 4-5 techniques on the sponge
                      (simple, continuous, lock, matress etc.) Teams can compete
                      with one member or take turns among their team members for
                      this round.
                    </li>
                  </ul>
                </div>

                <img src={pic22} />
              </div>

              <div className="rulesRoundBodyInd">
                <div className="rulesRoundBodyTxt">
                  <p className="rulesRoundBodyTxt1">
                    Round 3: Soap Carving or Direct Restorations
                  </p>
                  <ul>
                    <li className="rulesRoundBodyTxt1">
                      Each table is given a bar of soap and asked to carve a
                      tooth. The tooth number will be decided by the jury and
                      announced before the round; each team will be provided
                      with a paper model to aid their carving work.
                    </li>
                  </ul>
                </div>

                <img src={pic23} />
              </div>

              <div className="rulesRoundBodyInd">
                <div className="rulesRoundBodyTxt">
                  <p className="rulesRoundBodyTxt1">
                    Round 4: Orthodontic Wire Bending
                  </p>
                  <ul>
                    <li className="rulesRoundBodyTxt1">
                      Teams are given a shape on a paper (star, heart, a letter,
                      any symbols etc.). The contestant tries to bend the
                      Messing Wire according to the shape.
                    </li>
                  </ul>
                </div>

                <img src={pic24} />
              </div>
            </div>
          </div>

          <div className="bulletPoints">
            <div className="pagetitles">
              <p style={{ color: "#01838C" }} className="hongKong pagetitle1">
                Competition
              </p>
              <p className="pagetitle2">Prize</p>
            </div>

            <div className="bulletPointsBody">
              <ol>
                <li>The first team will be awarded with (coming soon)</li>
                <li>Certificate by IADS organization</li>
                <li>Coming soon!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dental;

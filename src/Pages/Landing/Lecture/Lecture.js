import React, { useState } from "react";
import "./Lecture.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Pagination, Mousewheel } from "swiper";
import pic1 from "../../../Assets/Images/Lecture/1.jpeg";
import pic2 from "../../../Assets/Images/Lecture/2.jpeg";
import pic3 from "../../../Assets/Images/Lecture/3.jpeg";
import pic4 from "../../../Assets/Images/Lecture/4.jpeg";
import pic5 from "../../../Assets/Images/Lecture/5.jpeg";
import pic6 from "../../../Assets/Images/Lecture/6.jpeg";
import pic7 from "../../../Assets/Images/Lecture/7.jpeg";
import pic8 from "../../../Assets/Images/Lecture/8.jpeg";

import zhermack from "../../../Assets/Images/Lecture/zhermack.svg";

import TH1 from "../../../Assets/Images/Thumbnails/Thumbnail3.png";
import TH2 from "../../../Assets/Images/Thumbnails/Thumbnail4.png";
import TH3 from "../../../Assets/Images/Thumbnails/Thumbnail9.png";
import TH4 from "../../../Assets/Images/Thumbnails/Thumbnail10.png";

function Lecture() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="lecturePage">
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
          </Swiper>
        </div>

        <div className="dentalPageSecond container">
          <div className="dentalPageSecondTitle">
            <div className="dentalPageSecondTitleMain">
              <p className="hongKong dentalPageSecondTitle2">Lecture</p>
              <p className="dentalPageSecondTitle1">Olympics </p>
            </div>

            <a className="dentalCTA">REGISTER now!</a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "100px",
            }}
          >
            <p className="dentalPageSecondBody">
              Lecture Contest is a competioton organised under the supervision
              of the Vice President of Science & Research (VPSR) along with
              SCORE and the National Scientific Officer (NSO) of the host
              country. Its scope is to synthesize a competitive environment for
              students and young dentists who are enthusiastic about research to
              present their work at a global scale; test their presentational
              skills and take their first steps into their future keynote
              speaker potential. Prizes and rewards are surely not to be missed{" "}
              <br />
              In August 2008, the first Lecture Contest was introduced to IADS
              members during the 55th Annual Congress in Sharm Elsheikh – Egypt.
              It was one of early fruits of the newly formed Standing Committee
              on Research and Education (SCORE) and it has been a symbol of the
              scientific program of IADS meetings since.
            </p>

            <p style={{ margin: "auto", fontWeight: "bold" }}>
              First place winner gets a free mentorship training from{" "}
              <img style={{ marginLeft: 10 }} src={zhermack} />
            </p>
            <a className="dentalCTA dentalCTAButtom">Lecture Contest rules</a>
          </div>

          <div>
            <div className="prevWinners">
              <p className="prevWinners1 hongKong">Previous</p>
              <p className="prevWinners2">Winners</p>
            </div>
            <div class="table-responsive">
              <table class="table1">
                <thead className="thead">
                  <tr>
                    <th scope="col">MEETING</th>
                    <th scope="col">1st PLACE</th>
                    <th scope="col">2nd PLACE</th>
                    <th scope="col">3rd PLACE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MYM’22 Jordan</td>
                    <td>--</td>
                    <td>--</td>
                    <td>Zhengish Zhamashev</td>
                  </tr>
                  <tr>
                    <td>AC’18 Taiwan</td>
                    <td>Araxie Dovlatian</td>
                    <td>Mirsad Kardić </td>
                    <td>Lau Yee Shean</td>
                  </tr>
                  <tr>
                    <td>AC’17 Madrid</td>
                    <td>Lucas Queiroz Caponi </td>
                    <td>Andrey Latyshev</td>
                    <td>Jonathan Jonlet Harker</td>
                  </tr>

                  <tr>
                    <td>AC’16 Poznan</td>
                    <td>James Yoon Chen Lian</td>
                    <td>Shayan Darvish</td>
                    <td>Tan Sze Hao</td>
                  </tr>

                  <tr>
                    <td>MYM’16 Bratislava</td>
                    <td>Elio Boschetti</td>
                    <td>Tatiana Fedotova</td>
                    <td>Shayan Darvish</td>
                  </tr>
                  <tr>
                    <td>AC’15 Bangkok</td>
                    <td>Filip Hromčík </td>
                    <td>Srinivasan Narasimhan</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>MYM’15 Amman</td>
                    <td>LHafizul Taufiq</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>

                  <tr>
                    <td>AC’14 Yogyakarta</td>
                    <td>Adelina Popa</td>
                    <td>Betül Gedik</td>
                    <td>Ayşe Nur Koç</td>
                  </tr>

                  <tr>
                    <td>MYM’14 Tunisia</td>
                    <td>Matej Magura</td>
                    <td>Amina Ben Salem Saied</td>
                    <td>Ayu Jembar Sari</td>
                  </tr>
                  <tr>
                    <td>AC’13 Istanbu</td>
                    <td>Murad Alrasheedi</td>
                    <td>Murad Alrasheedi</td>
                    <td>Camelia Dewi Hartanto</td>
                  </tr>

                  <tr>
                    <td>MYM’13 Lisbon</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>

                  <tr>
                    <td>AC’12 Bucharest</td>
                    <td>Huang Chun-shuo</td>
                    <td>Radulescu Raluca Ana</td>
                    <td>Sarah Eslami Shahrbabaki</td>
                  </tr>

                  <tr>
                    <td>MYM’12 Alexandria</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>AC’11 New Delhi</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>

                  <tr>
                    <td>MYM’11 Moscow</td>
                    <td>Cristofor Casavela</td>
                    <td>Tatiana Vorovchenko</td>
                    <td>Chandresh Shukla</td>
                  </tr>

                  <tr>
                    <td>AC’10 Brno</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>

                  <tr>
                    <td>AC’09 Lasi</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>AC’08 Sharm Elsheikh</td>
                    <td>Paula Moraru</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lecture;

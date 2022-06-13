import React, { useState } from "react";
import "./GeneralA.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Pagination, Mousewheel } from "swiper";
import pic1 from "../../../Assets/Images/General/1.jpeg";
import pic2 from "../../../Assets/Images/General/2.jpeg";
import pic3 from "../../../Assets/Images/General/3.jpeg";
import pic4 from "../../../Assets/Images/General/4.jpeg";
import pic5 from "../../../Assets/Images/General/5.jpeg";
import pic6 from "../../../Assets/Images/General/6.jpeg";
import pic7 from "../../../Assets/Images/General/7.jpeg";
import pic8 from "../../../Assets/Images/General/8.jpeg";

import pic9 from "../../../Assets/Images/General/9.jpeg";
import pic10 from "../../../Assets/Images/General/10.jpeg";
import pic11 from "../../../Assets/Images/General/11.jpeg";
import pic12 from "../../../Assets/Images/General/12.jpeg";

import pic13 from "../../../Assets/Images/General/13.jpeg";
import pic14 from "../../../Assets/Images/General/14.jpeg";
import pic15 from "../../../Assets/Images/General/15.jpeg";
import pic16 from "../../../Assets/Images/General/16.jpeg";
import pic17 from "../../../Assets/Images/General/17.jpeg";

import TH1 from "../../../Assets/Images/Thumbnails/Thumbnail3.png";
import TH2 from "../../../Assets/Images/Thumbnails/Thumbnail4.png";
import TH3 from "../../../Assets/Images/Thumbnails/Thumbnail9.png";
import TH4 from "../../../Assets/Images/Thumbnails/Thumbnail10.png";

function GeneralA() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="exhangePage">
        <div className="exhangePageMain container">
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
            <SwiperSlide>
              <img src={pic10} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic11} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic12} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={pic13} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic14} />
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
            <SwiperSlide>
              <img src={pic10} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic11} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic12} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={pic13} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic14} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="exhangePageSecond container">
          <div className="exchangePageSecondTitle">
            <div className="dentalPageSecondTitleMain">
              <p className="hongKong dentalPageSecondTitle2">General</p>
              <p className="dentalPageSecondTitle1">Assembly</p>
            </div>

            <a className="dentalCTA" href="/register">REGISTER now!</a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "100px",
            }}
          >
            <p className="dentalPageSecondBody">
            The General Assembly is the Association's supreme authority, composed of all the full members' representatives and it shall convene two times each year. The General Assembly shall be considered valid when 1/3 of the full members who are up to date with their membership fees are present.

            </p>

           
            <a className="dentalCTA dentalCTAButtom">General Contest rules</a>
          </div>

          <div className="exchangeSecond">
            <div className="aboutVen">
              <p className="aboutVen1 hongKong">About</p>
              <p className="aboutVen2">The Venue</p>
            </div>

            <div className="exchangeSecond2">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                mousewheel={true}
                modules={[FreeMode, Navigation, Thumbs, Mousewheel]}
                className="mySwiper"
                direction="vertical"
              >
                <SwiperSlide>
                  <img src={pic13} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={pic14} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={pic15} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={pic16} />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={pic17} />
                </SwiperSlide>
              
              </Swiper>

              <p>
                <span style={{ fontWeight: "bold" }}>
                  The Hall of Fame of KazNMU
                </span>
                <br />
                <br />
                The Hall of Fame of KazNMU is one of the main halls of the
                university, where the glory, pride and achievements of
                Kazakhstani medicine over the past 90 years are concentrated,
                where the most important meetings and meetings were held.
                <br />
                <br />
                Over 90 years of university rich history, the main forge of
                personnel in Kazakhstan's health care, the Kazakh National
                Medical University named after Sanzhar Asfendiyarov, has trained
                almost 100,000 doctors of various specialties, high-level
                professionals who have made a significant contribution to
                preserving the life and health of people. Every third doctor in
                the country today is a graduate of KazNMU.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralA;

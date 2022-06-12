import React, { useState } from "react";
import "./Lecture.scss";
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

import TH1 from "../../../Assets/Images/Thumbnails/Thumbnail3.png";
import TH2 from "../../../Assets/Images/Thumbnails/Thumbnail4.png";
import TH3 from "../../../Assets/Images/Thumbnails/Thumbnail9.png";
import TH4 from "../../../Assets/Images/Thumbnails/Thumbnail10.png";

function Lecture() {
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

            <a className="dentalCTA">REGISTER now!</a>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', marginBottom: '100px'}}>
          <p className="dentalPageSecondBody">
            Dental Olympics are olympic games exclusively brought to you by the
            Vice President of Science & Research (VPSR) along with SCORE and the
            National Scientific Officer (NSO) of the host country. With
            different competitive categories such as orthodontic wire bending,
            wax carving, dental kahoot and not only; several teams from
            different countries compete against each-other to the final
            champion.
          </p>
          <a className="dentalCTA dentalCTAButtom">Dental Olympics rules</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lecture;

import React, { useState } from "react";
import "./Exchange.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Pagination, Mousewheel } from "swiper";
import pic1 from "../../../Assets/Images/Exchange/1.jpeg";
import pic2 from "../../../Assets/Images/Exchange/2.jpeg";
import pic3 from "../../../Assets/Images/Exchange/3.jpeg";
import pic4 from "../../../Assets/Images/Exchange/4.jpeg";
import pic5 from "../../../Assets/Images/Exchange/5.jpeg";
import pic6 from "../../../Assets/Images/Exchange/6.jpeg";
import pic7 from "../../../Assets/Images/Exchange/7.jpeg";
import pic8 from "../../../Assets/Images/Exchange/8.jpeg";


import pic9 from "../../../Assets/Images/Exchange/9.jpeg";
import pic10 from "../../../Assets/Images/Exchange/10.jpeg";
import pic11 from "../../../Assets/Images/Exchange/11.jpeg";
import pic12 from "../../../Assets/Images/Exchange/12.jpeg";

import pic13 from "../../../Assets/Images/Exchange/13.jpeg";
import pic14 from "../../../Assets/Images/Exchange/14.jpeg";
import pic15 from "../../../Assets/Images/Exchange/15.jpeg";
import pic16 from "../../../Assets/Images/Exchange/16.jpeg";
import pic17 from "../../../Assets/Images/Exchange/17.jpeg";

import pic18 from "../../../Assets/Images/Exchange/18.jpeg";
import pic19 from "../../../Assets/Images/Exchange/19.jpeg";
import pic20 from "../../../Assets/Images/Exchange/20.jpeg";
import pic21 from "../../../Assets/Images/Exchange/21.jpeg";
import pic22 from "../../../Assets/Images/Exchange/22.jpeg";
import pic23 from "../../../Assets/Images/Exchange/23.jpeg";
import pic25 from "../../../Assets/Images/Exchange/25.jpeg";
import pic26 from "../../../Assets/Images/Exchange/26.jpeg";



function Exchange() {
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

            <SwiperSlide>
              <img src={pic15} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic16} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic17} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic18} />
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

            <SwiperSlide>
              <img src={pic15} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic16} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic17} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic18} />
            </SwiperSlide>

          </Swiper>
        </div>

        <div className="exhangePageSecond container">
          <div className="exchangePageSecondTitle">
            <div className="dentalPageSecondTitleMain">
              <p className="hongKong dentalPageSecondTitle2">Exchange</p>
              <p className="dentalPageSecondTitle1">Fair</p>
            </div>

            <a className="dentalCTA" href="/register">
              REGISTER now!
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
              Exchange Fair is a get together for all participants joining from
              all different countries to meet and hear from one another overseas
              experiences. It is an opportunity for students to immerse
              themselves in different cultures and open the door to global
              networking opportunities. During this exchange fair each attendee
              will have a table representing his delegation, where they can show
              their traditional food, drinks, deserts, etc.
              <br />
              <br />
              It is one of the symbolic events where you will feel the{" "}
              <span style={{ fontWeight: "bold" }}>
                "Together is Better"
              </span>{" "}
              motto of IADS to your bones so before stepping into the room, you
              should leave your prejudices at the door, be open to new
              experiences, and most importantly, be in the enjoyful state of
              mind!
              <br />
              <br />
              Last but not least, seeing people playing traditional instruments,
              teaching dance moves or singing national songs at the exchange
              fair every year, we couldn’t help but deliver a special event this
              year: A Talent Show! We invite all of you to bring your best
              talent be it singing, dancing, magic, comedy, or your best hidden
              one! PS: you can pair up with your friends too ;)
            </p>

            {/* <a className="dentalCTA dentalCTAButtom">Lecture Contest rules</a> */}
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
              <img src={pic19} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic20} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic21} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic22} />
            </SwiperSlide>


            <SwiperSlide>
              <img src={pic23} />
            </SwiperSlide>
       
            <SwiperSlide>
              <img src={pic25} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pic26} />
            </SwiperSlide>
              </Swiper>

              <p>
                <span style={{ fontWeight: "bold" }}>Sandyq Restaurant</span>
                <br />
                <br />
                "Sandyq" is a restaurant of national cuisine, the purpose of
                which is to show centuries-old traditions both in cooking,
                serving dishes, hospitality, and to present unique objects of
                historical and cultural significance, household items of the
                South Kazakhstan region.
                <br />
                <br />
                The walls and floors of the interior are covered with unique
                woven nap and lint-free carpets of the Syrdarya region, made in
                the technique of Arabi and taqy, with a set of patterns of
                sharsha, zhuldyz, omyrtka and other elements.
                <br />
                <br />
                Musical accompaniment is not just background music, it is a
                process that focuses on the education of musical taste, the
                revival of traditional heritage, the awakening of patriotism and
                the spiritual beginning of each listener.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exchange;

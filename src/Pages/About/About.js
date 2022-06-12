import React, { useState } from "react";
import "./About.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Mousewheel } from "swiper";
import pic1 from "../../Assets/Images/about/Aktay.jpg";
import pic2 from "../../Assets/Images/about/Almaty.jpg";
import pic3 from "../../Assets/Images/about/Almaty.webp";
import pic4 from "../../Assets/Images/about/Astana.jpg";
import pic5 from "../../Assets/Images/about/Kaindy.jpg";
import pic6 from "../../Assets/Images/about/Landscape.jpg";
import pic7 from "../../Assets/Images/about/Nature.jpg";
import pic8 from "../../Assets/Images/about/Yurt.jpg";
import TH1 from "../../Assets/Images/Thumbnails/Thumbnail3.png";
import TH2 from "../../Assets/Images/Thumbnails/Thumbnail4.png";
import TH3 from "../../Assets/Images/Thumbnails/Thumbnail9.png";
import TH4 from "../../Assets/Images/Thumbnails/Thumbnail10.png";

function About() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="aboutPage">
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

        <div className="aboutPageSecond container">
          <div className="aboutPageSecondTitle">
            <p className="aboutPageSecondTitle1">About</p>
            <p className="hongKong aboutPageSecondTitle2">Kazakhstan</p>
          </div>
          <p className="aboutPageSecondBody">
            Kazakhstan is a unique region in the world because of its history,
            geographical position, and size. Being the world’s 9th largest
            country and located in the center of Eurasia, it is also the largest
            landlocked country in the world. These factors have resulted in the
            country's particular climate and nature, which seem to absorb the
            brightest examples of the landscape of both continents. In addition,
            the complicated history of the Kazakh people and the constant
            interaction of nomadic lifestyle with settled people in South
            Kazakhstani ancient cities have led to Kazakhstan's unique and
            authentic culture.
            <br />
            <br /> In olden times, the Great Silk Road passed through the Kazakh
            lands. Merchants of Celestial Empire carried silk, weapons,
            medicines, rice, exotic goods such as tusks across Kazakh steppes to
            the West, to Europe. In this way Kazakhstan was the most important
            link in the chain of cultural, trade and economic relations between
            Asia and Europe.
            <br /> In almost every corner of the republic, a visitor interested
            in the lives of genuine Kazakh people – their traditions, their
            rituals, their art, and their culture – will find much interest.
            This can include museum complexes, ethno villages depicting the
            traditional lifestyle of Kazakh people, historical sites of medieval
            cities, and much more. <br />
            <br /> The country has an amazing nature, which paradoxically
            combines deep rivers and lakes with sultry deserts and singing
            sands, proud peaks of mountain ranges with divinely green oases. In
            order to be sure that this is all true, come and see everything for
            yourself. Kazakhstan waits for you!
          </p>
        </div>

        <div className="aboutPageVideos container-fluid">
          <div className="aboutPageVideosTitle">
            <p className="aboutPageVideosTitle1">Learn about the beauty of</p>
            <p className="aboutPageVideosTitle2 hongKong">Kazakstan</p>
          </div>

          <div className="aboutPageVideosMain">
            <a
              href="https://disk.yandex.kz/d/o9rPMpOAKiBd0w/03.mp4"
              target={"_blank"}
            >
              {" "}
              <img src={TH1} />{" "}
            </a>
            <a
              href="https://disk.yandex.kz/d/o9rPMpOAKiBd0w/004.mp4"
              target={"_blank"}
            >
              {" "}
              <img src={TH2} />{" "}
            </a>
            <a
              href="https://disk.yandex.kz/d/o9rPMpOAKiBd0w/009.mp4"
              target={"_blank"}
            >
              {" "}
              <img src={TH3} />{" "}
            </a>
            <a
              href="https://disk.yandex.kz/d/o9rPMpOAKiBd0w/10.mp4"
              target={"_blank"}
            >
              {" "}
              <img src={TH4} />{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

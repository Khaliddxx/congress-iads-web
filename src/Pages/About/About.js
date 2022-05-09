import React, {useState} from "react";
import "./About.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs, Pagination, Mousewheel } from "swiper";
import pic1 from "../../Assets/Images/about/Aktay.jpg"
import pic2 from "../../Assets/Images/about/Almaty.jpg"
import pic3 from "../../Assets/Images/about/Almaty.webp"
import pic4 from "../../Assets/Images/about/Astana.jpg"
import pic5 from "../../Assets/Images/about/Kaindy.jpg"
import pic6 from "../../Assets/Images/about/Landscape.jpg"
import pic7 from "../../Assets/Images/about/Nature.jpg"
import pic8 from "../../Assets/Images/about/Yurt.jpg"


function About() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="aboutPage container"> 
        <div className="aboutPageMain">

  
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

      <div className="container">

      </div>
      
       </div>
    </>
  );
}

export default About;

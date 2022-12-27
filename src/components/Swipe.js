import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "../global.css";
import Promo1 from "../asset/promo/promo1.jpg"
import Promo2 from "../asset/promo/promo2.jpg"
import Promo3 from "../asset/promo/promo3.jpg"
import Promo4 from "../asset/promo/promo4.jpg"
import Promo5 from "../asset/promo/promo5.jpg"
import Promo6 from "../asset/promo/promo6.jpg"
import Promo7 from "../asset/promo/promo7.jpg"
import Promo8 from "../asset/promo/promo8.jpg"
import Promo9 from "../asset/promo/promo9.jpg"

function Swipe() {
  return (
      <div><>
          <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
              }}
              pagination={{
                  clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
          >
              <SwiperSlide><img class='Gambarpromo' src={Promo1} alt="" /></SwiperSlide>
              <SwiperSlide><img class='Gambarpromo' src={Promo2} alt="" /></SwiperSlide>
              <SwiperSlide><img class='Gambarpromo' src={Promo3} alt="" /></SwiperSlide>
              <SwiperSlide><img class='Gambarpromo' src={Promo4} alt="" /></SwiperSlide>
              <SwiperSlide><img class='Gambarpromo' src={Promo5} alt="" /></SwiperSlide>
              <SwiperSlide><img class='Gambarpromo' src={Promo6} alt="" /></SwiperSlide>
              <SwiperSlide><img class='Gambarpromo' src={Promo7} alt="" /></SwiperSlide>
              <SwiperSlide><img class='Gambarpromo' src={Promo8} alt="" /></SwiperSlide>
              <SwiperSlide><img class='Gambarpromo' src={Promo9} alt="" /></SwiperSlide>
          </Swiper>
      </></div>
  )
}

export default Swipe
import React from "react";
import heroImg from "../../assets/hero__img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          className="container"
        >
          <SwiperSlide>
            <div className="hero__style">
              <div className="hero__style__content">
                <h1 className="hero__text">
                  Скидка 15% на все подвесные светильники
                  <br />
                  <span>до 5 февраля</span>
                </h1>
              </div>
              <img src={heroImg} alt="heroImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__style">
              <div className="hero__style__content">
                <h1 className="hero__text">
                  Скидка 15% на все подвесные светильники
                  <br />
                  <span>до 5 февраля</span>
                </h1>
              </div>
              <img src={heroImg} alt="heroImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__style">
              <div className="hero__style__content">
                <h1 className="hero__text">
                  Скидка 15% на все подвесные светильники
                  <br />
                  <span>до 5 февраля</span>
                </h1>
              </div>
              <img src={heroImg} alt="heroImg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;

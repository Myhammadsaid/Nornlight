import React from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import brandImg1 from "../../assets/brendImg1.png";
import brandImg2 from "../../assets/brendImg2.png";
import brandImg3 from "../../assets/brendImg3.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Brand = () => {
  return (
    <div>
      <section className="brand">
        <div className="container">
          <div className="home__titles">
            <h1 className="home__titles__title brand__title">
              Только проверенные бренды
            </h1>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            loop={true}
            // pagination={true}
            navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper "
            // className="brand__brands"
          >
            <SwiperSlide>
              <div className="brand__card">
                <img src={brandImg1} alt="brandImg1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand__card">
                <img src={brandImg2} alt="brandImg1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand__card">
                <img src={brandImg3} alt="brandImg1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand__card">
                <img src={brandImg1} alt="brandImg1" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Brand;

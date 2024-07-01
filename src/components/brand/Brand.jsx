import React, { useRef } from "react";
import brandImg1 from "../../assets/brendImg1.png";
import brandImg2 from "../../assets/brendImg2.png";
import brandImg3 from "../../assets/brendImg3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const Brand = () => {
  const swiperRef = useRef(null);

  const handleNextButtonClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevButtonClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div>
      <section className="brand">
        <div className="container">
          <div className="home__titles">
            <h1 className="home__titles__title brand__title">
              Только проверенные бренды
            </h1>
            <div className="brand__btns">
              <button
                className="brand__btns__btn"
                onClick={handlePrevButtonClick}
              >
                <IoIosArrowRoundBack />
              </button>
              <button
                className="brand__btns__btn"
                onClick={handleNextButtonClick}
              >
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <Swiper
            ref={swiperRef}
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
            autoplay={{
              delay: 2000,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="brand__card">
                <img src={brandImg1} alt="brandImg1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand__card">
                <img src={brandImg2} alt="brandImg2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand__card">
                <img src={brandImg3} alt="brandImg3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand__card">
                <img src={brandImg1} alt="brandImg1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand__card">
                <img src={brandImg2} alt="brandImg2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brand__card">
                <img src={brandImg3} alt="brandImg3" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Brand;

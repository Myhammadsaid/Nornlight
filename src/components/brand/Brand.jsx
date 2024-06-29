import React from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import brandImg1 from "../../assets/brendImg1.png";
import brandImg2 from "../../assets/brendImg2.png";
import brandImg3 from "../../assets/brendImg3.png";
import "./Brand.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Brand = () => {
  return (
    <div>
      <section className="brand">
        <div className="container">
          <div className="home__titles">
            <h1 className="home__titles__title brand__title">
              Только проверенные бренды
            </h1>
            <div className="brand__btns">
              <button className="brand__btns__btn">
                <IoIosArrowRoundBack />
              </button>
              <button className="brand__btns__btn">
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <div className="brand__brands">
            <img src={brandImg1} alt="brandImg1" />
            <img src={brandImg2} alt="brandImg1" />
            <img src={brandImg3} alt="brandImg1" />
            <img src={brandImg1} alt="brandImg1" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brand;

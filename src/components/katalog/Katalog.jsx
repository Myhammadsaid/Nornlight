import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import katalogImg1 from "../../assets/katalog__img1.png";
import katalogImg2 from "../../assets/katalog__img2.png";
import katalogImg3 from "../../assets/katalog__img3.png";
import katalogImg4 from "../../assets/katalog__img4.png";
import katalogImg5 from "../../assets/katalog__img5.png";
import katalogImg6 from "../../assets/katalog__img6.png";
import katalogImg7 from "../../assets/katalog__img7.png";
import katalogImg8 from "../../assets/katalog__img8.png";
import katalogImg9 from "../../assets/katalog__img9.png";
import katalogImg10 from "../../assets/katalog__img10.png";
import katalogImg11 from "../../assets/katalog__img11.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";

const Katalog = ({ isMarriadeCard }) => {
  let navigate = useNavigate();
  return (
    <div>
      <section className="katalog">
        <div className="container">
          <div className="home__titles">
            <h1 className="home__titles__title">Каталог</h1>
            <button
              onClick={() => navigate("/all-katalog")}
              className="home__titles__btn display__none"
            >
              Весь каталог <IoIosArrowRoundForward />
            </button>
          </div>
          <div className="katalog__cards display__none">
            <div className="katalog__card">
              <ul className="katalog__card__content">
                <li className="katalog__card__content__text">Люстры</li>
                <li className="katalog__card__content__text">
                  От 540₽ <IoIosArrowRoundForward />
                </li>
              </ul>
              <img src={katalogImg1} alt="katalogImg1" />
            </div>
            <div className="katalog__card">
              <ul className="katalog__card__content">
                <li className="katalog__card__content__text">Светильники</li>
                <li className="katalog__card__content__text">
                  От 540₽ <IoIosArrowRoundForward />
                </li>
              </ul>
              <img src={katalogImg2} alt="katalogImg1" />
            </div>
            <div className="katalog__card">
              <ul className="katalog__card__content">
                <li className="katalog__card__content__text">Бра</li>
                <li className="katalog__card__content__text">
                  От 540₽ <IoIosArrowRoundForward />
                </li>
              </ul>
              <img src={katalogImg3} alt="katalogImg1" />
            </div>
            <div className="katalog__card">
              <ul className="katalog__card__content">
                <li className="katalog__card__content__text">Торшеры</li>
                <li className="katalog__card__content__text">
                  От 540₽ <IoIosArrowRoundForward />
                </li>
              </ul>
              <img src={katalogImg4} alt="katalogImg1" />
            </div>
            <div className="katalog__card">
              <ul className="katalog__card__content">
                <li className="katalog__card__content__text">
                  Настольные лампы
                </li>
                <li className="katalog__card__content__text">
                  От 540₽ <IoIosArrowRoundForward />
                </li>
              </ul>
              <img src={katalogImg5} alt="katalogImg1" />
            </div>
            <div className="katalog__card">
              <ul className="katalog__card__content">
                <li className="katalog__card__content__text">Споты</li>
                <li className="katalog__card__content__text">
                  От 540₽ <IoIosArrowRoundForward />
                </li>
              </ul>
              <img src={katalogImg6} alt="katalogImg1" />
            </div>
            {isMarriadeCard ? (
              <>
                <div className="katalog__card">
                  <ul className="katalog__card__content">
                    <li className="katalog__card__content__text">
                      Трековые светильники
                    </li>
                    <li className="katalog__card__content__text">
                      От 540₽ <IoIosArrowRoundForward />
                    </li>
                  </ul>
                  <img src={katalogImg7} alt="katalogImg1" />
                </div>
                <div className="katalog__card">
                  <ul className="katalog__card__content">
                    <li className="katalog__card__content__text">
                      Уличные светильники
                    </li>
                    <li className="katalog__card__content__text">
                      От 540₽ <IoIosArrowRoundForward />
                    </li>
                  </ul>
                  <img src={katalogImg8} alt="katalogImg1" />
                </div>
                <div className="katalog__card">
                  <ul className="katalog__card__content">
                    <li className="katalog__card__content__text">
                      Технические светильники
                    </li>
                    <li className="katalog__card__content__text">
                      От 540₽ <IoIosArrowRoundForward />
                    </li>
                  </ul>
                  <img src={katalogImg9} alt="katalogImg1" />
                </div>
                <div className="katalog__card katalog__width">
                  <ul className="katalog__card__content">
                    <li className="katalog__card__content__text">
                      Уличные светильники
                    </li>
                    <li className="katalog__card__content__text">
                      От 540₽ <IoIosArrowRoundForward />
                    </li>
                  </ul>
                  <img src={katalogImg10} alt="katalogImg1" />
                </div>
                <div className="katalog__card katalog__width">
                  <ul className="katalog__card__content">
                    <li className="katalog__card__content__text">
                      Технические светильники
                    </li>
                    <li className="katalog__card__content__text">
                      От 540₽ <IoIosArrowRoundForward />
                    </li>
                  </ul>
                  <img src={katalogImg11} alt="katalogImg1" />
                </div>{" "}
              </>
            ) : (
              <></>
            )}
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            style={{ display: "none" }}
            className="katalog__cards display__block"
          >
            <SwiperSlide className="katalog__card">
              <ul className="katalog__card__content">
                <li className="katalog__card__content__text">Люстры</li>
                <li className="katalog__card__content__text">
                  От 540₽ <IoIosArrowRoundForward />
                </li>
              </ul>
              <img src={katalogImg1} alt="katalogImg1" />
            </SwiperSlide>
            <SwiperSlide className="katalog__card">
              <ul className="katalog__card__content">
                <li className="katalog__card__content__text">Светильники</li>
                <li className="katalog__card__content__text">
                  От 540₽ <IoIosArrowRoundForward />
                </li>
              </ul>
              <img src={katalogImg2} alt="katalogImg1" />
            </SwiperSlide>
            <SwiperSlide className="katalog__card">
              <ul className="katalog__card__content">
                <li className="katalog__card__content__text">Бра</li>
                <li className="katalog__card__content__text">
                  От 540₽ <IoIosArrowRoundForward />
                </li>
              </ul>
              <img src={katalogImg3} alt="katalogImg1" />
            </SwiperSlide>
            <SwiperSlide className="katalog__card">
              <ul className="katalog__card__content">
                <li className="katalog__card__content__text">Торшеры</li>
                <li className="katalog__card__content__text">
                  От 540₽ <IoIosArrowRoundForward />
                </li>
              </ul>
              <img src={katalogImg4} alt="katalogImg1" />
            </SwiperSlide>
            <SwiperSlide className="katalog__card">
              <ul className="katalog__card__content">
                <li className="katalog__card__content__text">
                  Настольные лампы
                </li>
                <li className="katalog__card__content__text">
                  От 540₽ <IoIosArrowRoundForward />
                </li>
              </ul>
              <img src={katalogImg5} alt="katalogImg1" />
            </SwiperSlide>
            <SwiperSlide className="katalog__card">
              <ul className="katalog__card__content">
                <li className="katalog__card__content__text">Споты</li>
                <li className="katalog__card__content__text">
                  От 540₽ <IoIosArrowRoundForward />
                </li>
              </ul>
              <img src={katalogImg6} alt="katalogImg1" />
            </SwiperSlide>
            {isMarriadeCard ? (
              <>
                <SwiperSlide className="katalog__card">
                  <ul className="katalog__card__content">
                    <li className="katalog__card__content__text">
                      Трековые светильники
                    </li>
                    <li className="katalog__card__content__text">
                      От 540₽ <IoIosArrowRoundForward />
                    </li>
                  </ul>
                  <img src={katalogImg7} alt="katalogImg1" />
                </SwiperSlide>
                <SwiperSlide className="katalog__card">
                  <ul className="katalog__card__content">
                    <li className="katalog__card__content__text">
                      Уличные светильники
                    </li>
                    <li className="katalog__card__content__text">
                      От 540₽ <IoIosArrowRoundForward />
                    </li>
                  </ul>
                  <img src={katalogImg8} alt="katalogImg1" />
                </SwiperSlide>
                <SwiperSlide className="katalog__card">
                  <ul className="katalog__card__content">
                    <li className="katalog__card__content__text">
                      Технические светильники
                    </li>
                    <li className="katalog__card__content__text">
                      От 540₽ <IoIosArrowRoundForward />
                    </li>
                  </ul>
                  <img src={katalogImg9} alt="katalogImg1" />
                </SwiperSlide>
                <SwiperSlide className="katalog__card">
                  <ul className="katalog__card__content">
                    <li className="katalog__card__content__text">
                      Уличные светильники
                    </li>
                    <li className="katalog__card__content__text">
                      От 540₽ <IoIosArrowRoundForward />
                    </li>
                  </ul>
                  <img src={katalogImg10} alt="katalogImg1" />
                </SwiperSlide>
                <SwiperSlide className="katalog__card">
                  <ul className="katalog__card__content">
                    <li className="katalog__card__content__text">
                      Технические светильники
                    </li>
                    <li className="katalog__card__content__text">
                      От 540₽ <IoIosArrowRoundForward />
                    </li>
                  </ul>
                  <img src={katalogImg11} alt="katalogImg1" />
                </SwiperSlide>
              </>
            ) : (
              <></>
            )}
          </Swiper>
          <button
            onClick={() => navigate("/all-katalog")}
            style={{ display: "none" }}
            className="home__titles__btn display__flex home__btn2 width__100"
          >
            Весь каталог <IoIosArrowRoundForward />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Katalog;

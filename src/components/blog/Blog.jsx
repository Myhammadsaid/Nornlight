import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import blogImg1 from "../../assets/blog__img1.png";
import blogImg2 from "../../assets/blog__img2.png";
import blogImg3 from "../../assets/blog__img3.png";
import { useNavigate } from "react-router-dom";

const Blog = ({ isMarriade, isMarriadeProduct }) => {
  let navigate = useNavigate();
  return (
    <div>
      <section className="blog">
        <div className="container">
          <div className="home__titles">
            <h1 className="home__titles__title">Блог</h1>
            {isMarriade ? (
              <button
                onClick={() => navigate("/all-blog")}
                className="home__titles__btn display__none"
              >
                Перейти в блог <IoIosArrowRoundForward />
              </button>
            ) : (
              <></>
            )}
          </div>
          <div className="blog__cards">
            <div className="blog__card">
              <img src={blogImg1} alt="blogImg1" />
              <div className="blog__card__content">
                <div className="blog__card__content__box">
                  <h2 className="blog__card__content__box__text">
                    Как правильно освещать дом снаружи?
                  </h2>
                  <span>
                    <MdArrowOutward />
                  </span>
                </div>
                <p className="blog__card__content__par">01.01.2024</p>
                <hr />
              </div>
            </div>
            <div className="blog__card">
              <img src={blogImg2} alt="blogImg1" />
              <div className="blog__card__content">
                <div className="blog__card__content__box">
                  <h2 className="blog__card__content__box__text">
                    Как правильно освещать дом снаружи?
                  </h2>
                  <span>
                    <MdArrowOutward />
                  </span>
                </div>
                <p className="blog__card__content__par">01.01.2024</p>
                <hr />
              </div>
            </div>
            <div className="blog__card">
              <img src={blogImg3} alt="blogImg1" />
              <div className="blog__card__content">
                <div className="blog__card__content__box">
                  <h2 className="blog__card__content__box__text">
                    Как правильно освещать дом снаружи?
                  </h2>
                  <span>
                    <MdArrowOutward />
                  </span>
                </div>
                <p className="blog__card__content__par">01.01.2024</p>
                <hr />
              </div>
            </div>
            {isMarriadeProduct ? (
              <>
                <div className="blog__card">
                  <img src={blogImg1} alt="blogImg1" />
                  <div className="blog__card__content">
                    <div className="blog__card__content__box">
                      <h2 className="blog__card__content__box__text">
                        Как правильно освещать дом снаружи?
                      </h2>
                      <span>
                        <MdArrowOutward />
                      </span>
                    </div>
                    <p className="blog__card__content__par">01.01.2024</p>
                    <hr />
                  </div>
                </div>
                <div className="blog__card">
                  <img src={blogImg2} alt="blogImg1" />
                  <div className="blog__card__content">
                    <div className="blog__card__content__box">
                      <h2 className="blog__card__content__box__text">
                        Как правильно освещать дом снаружи?
                      </h2>
                      <span>
                        <MdArrowOutward />
                      </span>
                    </div>
                    <p className="blog__card__content__par">01.01.2024</p>
                    <hr />
                  </div>
                </div>
                <div className="blog__card">
                  <img src={blogImg3} alt="blogImg1" />
                  <div className="blog__card__content">
                    <div className="blog__card__content__box">
                      <h2 className="blog__card__content__box__text">
                        Как правильно освещать дом снаружи?
                      </h2>
                      <span>
                        <MdArrowOutward />
                      </span>
                    </div>
                    <p className="blog__card__content__par">01.01.2024</p>
                    <hr />
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          {isMarriade ? (
            <>
              <button
                onClick={() => navigate("/all-blog")}
                style={{ display: "none" }}
                className="home__titles__btn display__flex home__btn2 width__100"
              >
                Перейти в блог <IoIosArrowRoundForward />
              </button>
              <div className="blog__wrapper">
                <h1 className="blog__wrapper__text display__none">
                  Производство светильников
                </h1>
                <h1
                  className="home__titles__title display__block"
                  style={{ display: "none" }}
                >
                  Блог
                </h1>
                <p className="blog__wrapper__par">
                  Интернет-магазин NORNLIGHT предлагает широкий ассортимент
                  светильников для освещения вашего дома или офиса. У нас вы
                  найдете разнообразные модели светильников, от современных и
                  стильных до классических и элегантных. Мы предлагаем
                  качественные и надежные светильники от лучших производителей,
                  которые подарят вам комфорт и уют.
                  <br />
                  <br />
                  Покупая светильники в нашем интернет-магазине, вы получаете
                  отличное соотношение цены и качества. Мы осуществляем доставку
                  по всей России, чтобы каждый клиент мог насладиться прекрасным
                  светом и удобством покупки онлайн. Обратитесь к нам сегодня и
                  превратите ваш дом в оазис тепла и света с NORNLIGHT!
                </p>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;

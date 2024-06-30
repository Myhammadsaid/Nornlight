import React from "react";
import componyImg1 from "../../assets/compony__img1.png";
import componyImg2 from "../../assets/compony__img2.png";
import componyImg3 from "../../assets/compony__img3.png";
import componyImg4 from "../../assets/compony__img4.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Company = () => {
  let navigate = useNavigate();
  return (
    <div>
      <section className="company">
        <div className="container">
          <div className="home__titles">
            <h2 className="home__titles__title">Почему NORNLIGHT?</h2>
            <button
              onClick={() => navigate("/about-company")}
              className="home__titles__btn display__none"
            >
              О компании <IoIosArrowRoundForward />
            </button>
          </div>
          <div className="company__cards">
            <div className="company__card">
              <img src={componyImg1} alt="componyImg1" />
              <h3 className="company__card__title">
                Только проверенные бренды
              </h3>
              <p className="company__card__text">
                Бренды, проверенные временем и качеством
              </p>
            </div>
            <div className="company__card">
              <img
                src={componyImg2}
                className="company__card__img"
                alt="componyImg1"
              />
              <h3 className="company__card__title">Самые низкие цены</h3>
              <p className="company__card__text">Ниже не будет нигде</p>
            </div>
            <div className="company__card">
              <img
                src={componyImg3}
                className="company__card__img"
                alt="componyImg1"
              />
              <h3 className="company__card__title">Быстрая доствка</h3>
              <p className="company__card__text">
                Доставляем по всей РФ за 1-10 дней
              </p>
            </div>
            <div className="company__card">
              <img src={componyImg4} alt="componyImg1" />
              <h3 className="company__card__title">Большой ассортимент</h3>
              <p className="company__card__text">Более 1000 товаров</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/about-company")}
            style={{ display: "none" }}
            className="home__titles__btn display__flex home__btn2"
          >
            О компании <IoIosArrowRoundForward />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Company;

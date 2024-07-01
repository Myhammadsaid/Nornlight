import React from "react";
import { useDetailProductQuery } from "../../context/api/productApi";
import singleImg from "../../assets/single__img.png";
import { useParams } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import SingleSkeleton from "../single-skeleton/SingleSkeleton";

const Single = () => {
  let { id } = useParams();
  let { data, isLoading } = useDetailProductQuery(id);

  return (
    <div>
      {isLoading ? (
        <SingleSkeleton />
      ) : (
        <section className="single">
          <div className="container">
            <div className="single__style">
              <img
                className="single__style__img"
                src={data?.url[0]}
                alt={data?.title}
              />
              <div className="single__content">
                <h1 className="single__content__text">{data?.desc}</h1>
                <ul>
                  <li>Scott</li>
                  <li>
                    Артикул : 7655-188 <img src={singleImg} alt="singleImg" />
                  </li>
                  <li>В наличии</li>
                </ul>
                <div className="single__content__prices">
                  <h1 className="single__content__prices__price">
                    {data?.price} $
                  </h1>
                  <s>{data?.price * 2} $</s>
                </div>
                <p className="single__content__par">
                  Профессиональный гоночный хардтейл для кросс-кантри уровня
                  Чемпионата и Кубка Мира. Одна из самых легких рам среди
                  гоночных хардтейлов для кросс-кантри.
                </p>
                <div className="single__content__box">
                  <div className="single__content__btns">
                    <button className="single__content__btns__btn">-</button>
                    <button className="single__content__btns__btn">1</button>
                    <button className="single__content__btns__btn">+</button>
                  </div>
                  <button className="single__content__btns__cart">
                    В корзину
                  </button>
                  <button className="single__content__btns__heart">
                    <FiHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Single;

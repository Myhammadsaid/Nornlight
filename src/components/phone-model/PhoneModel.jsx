import React from "react";
import { IoMdClose, IoIosArrowRoundForward } from "react-icons/io";

const PhoneModel = ({ setPhonetoggle }) => {
  return (
    <div>
      <div onClick={() => setPhonetoggle(false)} className="overflow"></div>
      <div className="phone__model">
        <h1 className="phone__model__text">
          Заполните, <br />и мы перезвоним
        </h1>
        <form className="phone__model__form">
          <input
            type="text"
            placeholder="ФИО"
            className="phone__model__form__input"
          />
          <input
            type="number"
            placeholder="Телефон"
            className="phone__model__form__input"
          />
          <button className="phone__model__form__btn">
            Весь каталог <IoIosArrowRoundForward />
          </button>
        </form>
        <IoMdClose
          onClick={() => setPhonetoggle(false)}
          className="phone__model__close"
        />
      </div>
    </div>
  );
};

export default PhoneModel;

import React, { useState } from "react";
import logo from "../../assets/header__logo.png";
import { RiMenu2Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { FaSignal } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import PhoneModel from "../phone-model/PhoneModel";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [phonetoggle, setPhonetoggle] = useState(false);
  let navigate = useNavigate();
  return (
    <div>
      <motion.header
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="header"
      >
        <div className="container">
          <div
            className={`header__top ${toggle ? "open" : ""}`}
            id="navbar-responsive"
          >
            <div className="header__top__items1">
              <Link to={"/about-company"} className="header__top__item">
                О компании
              </Link>
              <Link to={"/shipining-payment"} className="header__top__item">
                Доставка и оплата
              </Link>
              <Link to={"/return"} className="header__top__item">
                Возврат
              </Link>
              <Link to={"/garant"} className="header__top__item">
                Гарантии
              </Link>
              <Link to={"/contact"} className="header__top__item">
                Контакты
              </Link>
              <Link to={"/all-blog"} className="header__top__item">
                Блог
              </Link>
            </div>
            <div className="header__top__items2">
              <a href="#" className="header__top__item phone">
                8 (800) 890-46-56
              </a>
              <a
                onClick={() => setPhonetoggle(!phonetoggle)}
                href="#"
                className="header__top__item tell"
              >
                Заказать звонок
              </a>
            </div>
          </div>
          <div className="header__bottom">
            <button
              onClick={() => setToggle(!toggle)}
              className="header__bottom__btn"
            >
              {toggle ? <IoMdClose /> : <BiMenuAltRight />}
            </button>
            <Link to={"/"} className="header__bottom__logo">
              <img src={logo} alt="header__logo" />
              NORNLIGHT
            </Link>
            <a
              onClick={() => navigate("/all-katalog")}
              href="#"
              className="header__bottom__katalog display__none"
            >
              <RiMenu2Fill />
              Каталог
            </a>
            <form className="header__bottom__form display__none">
              <input
                type="search"
                placeholder="Поиск по товарам"
                className="header__bottom__form__input"
              />
              <IoSearchOutline />
            </form>
            <div className="header__bottom__items">
              <a href="#" className="header__bottom__items__item">
                <FiHeart />
                <span className="display__none">Избранное</span>
                <div className="header__bottom__count">0</div>
              </a>
              <a href="#" className="header__bottom__items__item display__none">
                <FaSignal />
                <span className="display__none">Сравнение</span>
              </a>
              <a href="#" className="header__bottom__items__item">
                <BsCart />
                <span className="display__none">Корзина</span>
                <div className="header__bottom__count">0</div>
              </a>
            </div>
          </div>
          <form
            style={{ display: "none" }}
            className="header__bottom__form display__block"
          >
            <input
              type="search"
              placeholder="Поиск по товарам"
              className="header__bottom__form__input"
            />
            <IoSearchOutline />
          </form>
        </div>
      </motion.header>
      {phonetoggle ? <PhoneModel setPhonetoggle={setPhonetoggle} /> : <></>}
    </div>
  );
};

export default Header;

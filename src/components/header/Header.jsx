import React, { useEffect, useState } from "react";
import logo from "../../assets/header__logo.png";
import { RiMenu2Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { FaSignal } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosArrowRoundForward, IoMdClose } from "react-icons/io";
import { useNavigate, useLocation, NavLink, Link } from "react-router-dom";
import { useGetProductsQuery } from "../../context/api/productApi";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Model from "../model/Model";
import Search from "../search/Search";

const Header = () => {
  let { pathname } = useLocation();

  if (pathname.includes("login") || pathname.includes("admin")) {
    return <></>;
  }

  const [toggle, setToggle] = useState(false);
  const [modulToggle, setModulToggle] = useState(false);
  const carts = useSelector((state) => state.cart.value.length);
  const heart = useSelector((state) => state.wishlist.value.length);
  let navigate = useNavigate();

  const { data } = useGetProductsQuery();
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState(data);

  useEffect(() => {
    setFilterData(
      data?.filter((product) =>
        product.title.toLowerCase().includes(searchValue.trim().toLowerCase())
      )
    );
  }, [searchValue]);

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
              <NavLink
                onClick={() => setToggle(false)}
                to={"/about-company"}
                className="header__top__item"
              >
                О компании
              </NavLink>
              <NavLink
                onClick={() => setToggle(false)}
                to={"/shipining-payment"}
                className="header__top__item"
              >
                Доставка и оплата
              </NavLink>
              <NavLink
                onClick={() => setToggle(false)}
                to={"/return"}
                className="header__top__item"
              >
                Возврат
              </NavLink>
              <NavLink
                onClick={() => setToggle(false)}
                to={"/garant"}
                className="header__top__item"
              >
                Гарантии
              </NavLink>
              <NavLink
                onClick={() => setToggle(false)}
                to={"/contact"}
                className="header__top__item"
              >
                Контакты
              </NavLink>
              <NavLink
                onClick={() => setToggle(false)}
                to={"/all-blog"}
                className="header__top__item"
              >
                Блог
              </NavLink>
            </div>
            <div className="header__top__items2">
              <a href="#" className="header__top__item phone">
                8 (800) 890-46-56
              </a>
              <a
                onClick={() => setModulToggle(!modulToggle)}
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
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                type="search"
                placeholder="Поиск по товарам"
                className="header__bottom__form__input"
              />
              <IoSearchOutline />
              <Search
                width={"580px"}
                left={"34%"}
                filterData={filterData}
                searchValue={searchValue}
              />
            </form>
            <div className="header__bottom__items">
              <Link
                onClick={() => setToggle(false)}
                to={"/wishlist"}
                className="header__bottom__items__item"
              >
                <FiHeart />
                <span className="display__none">Избранное</span>
                <div className="header__bottom__count">{heart}</div>
              </Link>
              <Link
                onClick={() => setToggle(false)}
                to={"/comparisons"}
                className="header__bottom__items__item display__none"
              >
                <FaSignal />
                <span className="display__none">Сравнение</span>
              </Link>
              <Link
                onClick={() => setToggle(false)}
                to={"/cart"}
                className="header__bottom__items__item"
              >
                <BsCart />
                <span className="display__none">Корзина</span>
                <div className="header__bottom__count">{carts}</div>
              </Link>
            </div>
          </div>
          <form
            style={{ display: "none" }}
            className="header__bottom__form display__block"
          >
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="search"
              placeholder="Поиск по товарам"
              className="header__bottom__form__input"
            />
            <IoSearchOutline />
            <Search
              width={"80%"}
              left={"50px"}
              filterData={filterData}
              searchValue={searchValue}
            />
          </form>
        </div>
      </motion.header>
      {modulToggle ? (
        <Model setModulToggle={setModulToggle}>
          <h1 className="phone__text">
            Заполните, <br />и мы перезвоним
          </h1>
          <form className="phone__form">
            <input
              type="text"
              placeholder="ФИО"
              className="phone__form__input"
            />
            <input
              type="number"
              placeholder="Телефон"
              className="phone__form__input"
            />
            <button
              onClick={() => navigate("/all-katalog")}
              className="phone__form__btn"
            >
              Весь каталог <IoIosArrowRoundForward />
            </button>
          </form>
        </Model>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;

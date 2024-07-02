import React from "react";
import footerIcon from "../../assets/header__logo.png";
import footerPreview from "../../assets/footer__img.png";
import footerLogo from "../../assets/footer__logo.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
  if (
    useLocation().pathname === "/login" ||
    useLocation().pathname === "/admin"
  )
    return <></>;

  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__items">
            <ul className="footer__item">
              <li href="#" className="footer__item__logo">
                <img src={footerIcon} alt="headerIcon" />
                NORNLIGHT
              </li>
              <li href="#" className="footer__item__link">
                8 (800) 890-46-56
              </li>
              <li
                href="https://cis.visa.com/visa-in-uzbekistan.html"
                className="footer__item__link"
              >
                <img src={footerPreview} alt="headerPreview" />
              </li>
              <li href="#" className="footer__item__link">
                Политика конфидециальности
              </li>
              <li href="#" className="footer__item__link">
                Пользовательское соглашение
              </li>
              <div className="footer__item__images">
                <img src={footerLogo} alt="footerLogo" />
                <img src={footerLogo} alt="footerLogo" />
                <img src={footerLogo} alt="footerLogo" />
              </div>
            </ul>
            <ul className="footer__item">
              <li className="footer__item__title">Покупателям</li>
              <li href="#" className="footer__item__link">
                О компании
              </li>
              <li href="#" className="footer__item__link">
                Доставка и оплата
              </li>
              <li href="#" className="footer__item__link">
                Возврат
              </li>
              <li href="#" className="footer__item__link">
                Гарантии
              </li>
              <li href="#" className="footer__item__link">
                Контакты
              </li>
              <li href="#" className="footer__item__link">
                Блог
              </li>
            </ul>
            <ul className="footer__item">
              <li className="footer__item__title">Товары</li>
              <li href="#" className="footer__item__link">
                Люстры
              </li>
              <li href="#" className="footer__item__link">
                Светильники
              </li>
              <li href="#" className="footer__item__link">
                Бра
              </li>
              <li href="#" className="footer__item__link">
                Торшеры
              </li>
              <li href="#" className="footer__item__link">
                Комплектуюшие
              </li>
              <li href="#" className="footer__item__link">
                Настольные лампы
              </li>
            </ul>
            <ul className="footer__item">
              <li href="#" className="footer__item__link">
                Споты
              </li>
              <li href="#" className="footer__item__link">
                Трековые светильники
              </li>
              <li href="#" className="footer__item__link">
                Уличные светильники
              </li>
              <li href="#" className="footer__item__link">
                Технические светильники
              </li>
              <li href="#" className="footer__item__link">
                Светодиодные ленты
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

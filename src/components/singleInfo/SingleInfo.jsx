import React from "react";

const SingleInfo = () => {
  return (
    <div>
      <section className="single__info">
        <div className="container">
          <h1 className="single__info__title">Характеристика</h1>
          <table>
            <tbody>
              <tr>
                <td>Цвет</td>
                <td>Жёлтый</td>
              </tr>
              <tr>
                <td>Год</td>
                <td>2016</td>
              </tr>
              <tr>
                <td>Диаметр колеса</td>
                <td>27.5</td>
              </tr>
              <tr>
                <td>Материал рамы</td>
                <td>Карбон</td>
              </tr>
              <tr>
                <td>Размер</td>
                <td>L</td>
              </tr>
              <tr>
                <td>Страна</td>
                <td>Швейцария</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>Scott</td>
              </tr>
              <tr>
                <td>Покрышки</td>
                <td>
                  Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy
                  / PaceStar compound
                </td>
              </tr>
              <tr>
                <td>Рама</td>
                <td>
                  Scale Carbon / HMX-технология / технология IMP / Коническая
                  рулевая труба / BB92 / Технология SDS / Дропауты IDS SL
                </td>
              </tr>
              <tr>
                <td>Подседельный Штырь</td>
                <td>
                  Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm
                  900 Series: Carbon 2B SDS / 34.9mm
                </td>
              </tr>
              <tr>
                <td>Седло</td>
                <td>Ritchey WCS Streem V3 Titanium rails</td>
              </tr>
              <tr>
                <td>Вилка</td>
                <td>
                  Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle /
                  коническая рулевая труба / Удалённая блокировка, регулировка
                  отскока / ход 100mm
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default SingleInfo;

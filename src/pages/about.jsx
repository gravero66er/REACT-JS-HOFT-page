import React from "react";

export default function About() {
  return (
    <div className="about">
      <div className="about__title">
        Производим любые изделия из <span>PPSU</span>
      </div>
      <p>Отгружаем со склада на следующий день после заказа.</p>
      <div className="about__slider">
        <div className="slider__item slider__item-1"></div>
        <div className="slider__item slider__item-2"></div>
        <div className="slider__item slider__item-3"></div>
        <div className="slider__item slider__item-4"></div>
        <div className="slider__item slider__item-5"></div>
      </div>
      <a href="">
        <button className="about__button">Получить каталог</button>
      </a>
    </div>
  );
}

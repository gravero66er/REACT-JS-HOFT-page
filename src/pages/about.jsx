import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "+100%",
    },
  };

  const pageDelay = {
    duration: 0.5
  }

  return (
    <motion.div
      className="page"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={pageDelay}
    >
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
        <a href="https://yadi.sk/i/ZnwCg7t_pViVoA" target="_blank">
          <button className="about__button">скачать каталог</button>
        </a>
      </div>
    </motion.div>
  );
}

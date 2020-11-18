import React from "react";
import { motion } from "framer-motion";

export default function Advantages() {
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
    duration: 0.5,
  };
  return (
    <motion.div
      className="page"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={pageDelay}
    >
      <div className="advantages">
        <div className="advantages__list">
          <div className="advantages__item">
            <div className="item__icon item__icon-1"></div>
            <div className="item__title">КАЧЕСТВО</div>
            <div className="item__content">
              Продукция не отличается от Европейских аналогов. Цены дешевле на
              15-20% с учётом всех налогов.
            </div>
          </div>
          <div className="advantages__item">
            <div className="item__icon item__icon-2"></div>
            <div className="item__title">ДОСТАВКА</div>
            <div className="item__content">
              Доставляем за 14 дней, зарубежные компании доставляют минимум за
              2,5 месяца.
            </div>
          </div>
          <div className="advantages__item">
            <div className="item__icon item__icon-3"></div>
            <div className="item__title">АУДИТ</div>
            <div className="item__content">
              Ежеквартально качество проверяют аудиторы «‎Sоlvay»‎ — крупнейшего
              производителя сырья.
            </div>
          </div>
          <div className="advantages__item">
            <div className="item__icon item__icon-4"></div>
            <div className="item__title">ДИНАМИКА</div>
            <div className="item__content">
              За последние 5 лет компания вошла в ТОП-3 в России по объёму
              продаж PPSU-фитингов.
            </div>
          </div>
          <div className="advantages__item">
            <div className="item__icon item__icon-5"></div>
            <div className="item__title">ГАРАНТИЯ</div>
            <div className="item__content">
              Гарантия на продукцию 7 лет, срок эксплуатации 50 лет. У
              зарубежных аналогов 5 и 30 лет.
            </div>
          </div>
          <div className="advantages__item">
            <div className="item__icon item__icon-6"></div>
            <div className="item__title">ЭКОНОМИЯ</div>
            <div className="item__content">
              Наши клиенты экономят 4-10% на брокерах, за контроль качества
              производства за рубежом.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

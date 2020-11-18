import React, { useState } from "react";
import YMap from "./map";
import Modal from "./modal";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contacts() {
  const [modalActive, setModalActive] = useState(false);
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5klt8gc",
        "template_8885g8r",
        e.target,
        "user_CBJ14UASlG7s5JUBYneM4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
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
      <div className="contacts">
        <div className="contacts__content">
          <div className="contacts__address contacts__address-big">
            620026, Свердловская область
          </div>
          <div className="contacts__address contacts__address-small">
            Екатеринбург,
            <br />
            ул. Энегльса, 36, оф. 501/4
          </div>
          <div className="contacts__box">
            <a href="tel:8343300490">
              <div className="contacts__phone">8 (800) 600 62 16</div>
              <div className="contacts__phone">8 (343) 300 49 01</div>
            </a>
            <a href="mailto:info@hoft.pro" className="contacts__email">
              info@hoft.pro
            </a>
          </div>
          <button
            className="about__button"
            onClick={() => setModalActive(true)}
          >
            Заказать звонок
          </button>
        </div>
        <div className="contacts__content">
          <YMap />
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <form onSubmit={sendEmail} className="modal__form">
          <input
            type="text"
            className="modal__input"
            placeholder="Имя"
            name="name"
          />
          <input
            type="email"
            className="modal__input"
            placeholder="Email"
            name="email"
          />
          <input
            type="tel"
            className="modal__input"
            placeholder="Телефон"
            name="phone"
          />
          <br />
          <button type="submit" className="about__button">
            Отправить
          </button>
        </form>
      </Modal>
    </motion.div>
  );
}

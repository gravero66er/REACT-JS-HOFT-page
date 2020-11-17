import React, { useState } from "react";
import Modal from "./modal";
import emailjs from "emailjs-com";

export default function Partners() {
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
  return (
    <div className="page">
      <div className="partners">
        <div className="partners__list">
          <div className="partners__item partners__item-1"></div>
          <div className="partners__item partners__item-2"></div>
          <div className="partners__item partners__item-3"></div>
          <div className="partners__item partners__item-4"></div>
          <div className="partners__item partners__item-5"></div>
          <div className="partners__item partners__item-6"></div>
          <div className="partners__item partners__item-7"></div>
          <div className="partners__item partners__item-8"></div>
        </div>

        <button
          className="partners__button"
          onClick={() => setModalActive(true)}
        >
          Получить предложение
        </button>

        <p>Получить персональное коммерческое предложение</p>
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
    </div>
  );
}

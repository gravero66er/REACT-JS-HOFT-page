import React, { useState } from "react";
import Modal from "../../pages/modal";
import emailjs from "emailjs-com";

export default function HeaderRow() {
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
    <div>
      <div className="header__row">
        <div className="header__logo" />
        <button className="header__button" onClick={() => setModalActive(true)}>
          Заказать звонок
        </button>
        <div className="header__contacts">
          <a href="tel:88001876574">
            <div className="header__phone">8 (800) 600 62 16</div>
          </a>
          <a href="tel:8343300490">
            <div className="header__phone">8 (343) 300 49 01</div>
          </a>
          <a href="mailto:info@hoft.pro" className="header__email">
            info@hoft.pro
          </a>
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
    </div>
  );
}

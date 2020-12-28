import React, { useState } from "react";
import Modal from "../../pages/modal";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

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

  const notify = () => {
    toast.info("СООБЩЕНИЕ ОТПРАВЛЕНО!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div>
      <div className="header__row">
        <div className="header__logo" />
        <button className="header__button" onClick={() => setModalActive(true)}>
          Заказать звонок
        </button>
        <div className="header__contacts">
          <a href="tel:88006006216">
            <div className="header__phone">8 (800) 600 62 16</div>
          </a>
          <a href="tel:83433004901">
            <div className="header__phone">8 (343) 300 49 01</div>
          </a>
          <a href="mailto:info@hoft.pro" className="header__email">
            info@hoft.pro
          </a>
        </div>
        <div className="header__icon_wrapper">
          <a href="tel:88006006216">
            <div className="header__icon"></div>
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
          <br />
          <button type="submit" className="about__button" onClick={notify}>
            Отправить
          </button>
        </form>
      </Modal>
    </div>
  );
}

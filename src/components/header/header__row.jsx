import React from "react";

export default function HeaderRow() {
  return (
    <div className="header__row">
      <div className="header__logo" />
      <button className="header__button">Заказать звонок</button>
      <div className="contacts header__contacts">
        <a href="tel:88001876574">
          <div className="header__phone">8 (800) 187-65-74</div>
        </a>
        <a href="" className="header__email">
          info@hoft.pro
        </a>
      </div>
    </div>
  );
}

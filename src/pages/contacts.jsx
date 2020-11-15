import React from "react";
import YMap from "./map";

export default function Contacts() {
  return (
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
          <a href="tel:88001876574">
            <div className="contacts__phone">8 (800) 187-65-74</div>
          </a>
          <a href="" className="contacts__email">
            info@hoft.pro
          </a>
        </div>
        <a href="">
          <button className="about__button">Заказать звонок</button>
        </a>
      </div>
      <div className="contacts__content">
        <YMap />
      </div>
    </div>
  );
}

import React from "react";
import YMap from "./map";
import { motion } from "framer-motion";

export default function Contacts() {
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
        </div>
        <div className="contacts__content">
          <YMap />
        </div>
      </div>
    </motion.div>
  );
}

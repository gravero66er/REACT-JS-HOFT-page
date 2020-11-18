import React, { useState } from "react";
import Modal from "./modal";
import { motion } from "framer-motion";

export default function Partners() {
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
      </div>
    </motion.div>
  );
}

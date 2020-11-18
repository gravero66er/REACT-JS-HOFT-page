import React from "react";
import About from "../../pages/about";
import Advantages from "../../pages/advantages";
import Contacts from "../../pages/contacts";
import Partners from "../../pages/partners";
import styled from "styled-components";
import { NavLink, Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const MenuBox = styled.div`
  @media (max-width: 861px) {
    height: ${({ open }) => (open ? "140px" : "0px")};
    padding: ${({ open }) => (open ? "10px" : "5")};

    a {
      transform: ${({ open }) =>
        open ? "translateX(0)" : "translateX(-500px)"};
      opacity: ${({ open }) => (open ? 1 : 0)};
    }
  }
`;

export default function Menu({ open }) {
  const location = useLocation();
  return (
    <div>
      <MenuBox className="menu" open={open}>
        <NavLink exact to="/" className="menu__item">
          HOFT
        </NavLink>
        <NavLink exact to="/advantages" className="menu__item">
          ПРИЕМУЩЕСТВА
        </NavLink>
        <NavLink exact to="/partners" className="menu__item">
          ПАРТНЕРЫ
        </NavLink>
        <NavLink exact to="/contacts" className="menu__item">
          КОНТАКТЫ
        </NavLink>
      </MenuBox>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route key={"/"} exact path="/" component={About} />
          <Route
            key={"/advantages"}
            exact
            path="/advantages"
            component={Advantages}
          />
          <Route key={"/partner"} exact path="/partners" component={Partners} />
          <Route
            key={"/contacts"}
            exact
            path="/contacts"
            component={Contacts}
          />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

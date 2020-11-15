import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./menu";

const Burger = styled.div`
  div {
    margin-left: ${({ open }) => (open ? "5px" : 0)};
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : 0)};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(-40px)" : 0)};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : 0)};
    }
  }
`;

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Burger
        className="header__burger"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div></div>
        <div></div>
        <div></div>
      </Burger>
      <Menu open={open} />
    </>
  );
}

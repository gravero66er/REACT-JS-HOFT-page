import React from "react";
import styled from "styled-components";

const MenuBox = styled.div`
  @media (max-width: 861px) {
    height: ${({ open }) => (open ? "140px" : "0px")};
    padding: ${({ open }) => (open ? "10px" : "5")};

    a {
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-500px)'};
      opacity: ${({open}) => open ? 1 : 0};
    }
  }
`;

export default function Menu({ open }) {
  return (
    <MenuBox className="menu" open={open}>
      <a href="" className="menu__item">
        HOFT
      </a>
      <a href="" className="menu__item">
        ПРИЕМУЩЕСТВА
      </a>
      <a href="" className="menu__item">
        ПАРТНЕРЫ
      </a>
      <a href="" className="menu__item">
        КОНТАКТЫ
      </a>
    </MenuBox>
  );
}

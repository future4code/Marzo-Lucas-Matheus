import React from "react";
import { Container } from "./Header.styled";

export const Header = ({ onClickStart }) => {
  return (
    <Container>
      <button onClick={onClickStart}>Começar</button>
    </Container>
  );
};

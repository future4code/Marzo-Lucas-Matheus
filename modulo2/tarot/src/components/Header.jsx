import React from "react";
import styled from "styled-components";

const Container = styled.header`
  border-bottom: 1px solid black;
  text-align: center;
  padding: 0.75rem;
  background: transparent;
  position: sticky;
  top: 0;

  button {
    padding: 0.5rem 1.5rem;

    background: #1a8cd8;
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Header = ({ onClickStart }) => {
  return (
    <Container>
      <button onClick={onClickStart}>Começar</button>
    </Container>
  );
};

import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 2px solid var(--blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 70%;
    padding: 1rem;
  }

  div {
    padding: 1rem;
    width: 100%;
    text-align: center;
    border: 0;
    background-color: var(--blue);
    color: #fff;
    font-weight: 600;
  }
`;

export const Card = ({ name, image }) => {
  return (
    <CardContainer>
      <img src={image} alt="image" />
      <div>{name}</div>
    </CardContainer>
  );
};

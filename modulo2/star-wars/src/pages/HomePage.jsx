import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 1rem 4rem;
    font-size: 1.3rem;
    margin-left: 2rem;
    border-radius: 0.5rem;
    background: #fff;
    transition: color 0.3s, border-color 0.3s, box-shadow 0.3s;
    font-weight: 600;

    &:hover {
      color: var(--orange);
      border-color: var(--orange);
      box-shadow: 2px 2px 5px 2px var(--orange);
    }
  }
`;

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <button onClick={() => navigate("/starships")}>Starships</button>
      <button onClick={() => navigate("/people")}>People</button>
    </Container>
  );
};

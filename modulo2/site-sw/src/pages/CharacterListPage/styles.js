import styled from "styled-components";

export const Container = styled.div`
  p {
    border: 1px solid black;
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    text-align: center;
    text-transform: uppercase;
    background: aliceblue;
    color: #333;
    font-weight: 700;
    cursor: pointer;
    margin-top: 0.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

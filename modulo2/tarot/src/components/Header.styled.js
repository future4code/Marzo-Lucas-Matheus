import styled from "styled-components";

export const Container = styled.header`
  text-align: center;
  padding: 0.75rem;

  button {
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
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

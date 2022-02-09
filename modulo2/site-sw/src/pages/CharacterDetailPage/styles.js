import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
  }

  p {
    border: 1px solid black;
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    text-align: center;
    text-transform: capitalize;
    background: aliceblue;
    color: #333;
    font-weight: 700;
    margin-top: 0.5rem;
    transition: filter 0.2s;
  }

  button {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }
`;

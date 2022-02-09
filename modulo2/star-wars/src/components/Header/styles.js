import styled from "styled-components";

export const Container = styled.nav`
  border: 1px solid black;
  padding-left: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background: var(--blue);

  h1 {
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    display: flex;

    .link {
      padding: 1.2rem 1.5rem;
      font-size: 1.1rem;
      border-left: 1px solid #fff;
      transition: color 0.2s, border-color 0.2s;
      color: #fff;
      text-decoration: none;

      &:hover {
        color: var(--orange);
        border-color: var(--orange);
        cursor: pointer;
      }
    }
  }
`;

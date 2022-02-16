import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 2rem;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    padding: 0 1rem;
  }

  ul {
    list-style: none;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;

    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
      grid-template-columns: repeat(3, 1fr);
    }

    img {
      max-width: 100%;
    }

    .image-back-card {
      transition: 0.5s;
      :hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 0.5rem;
  color: #fff;
  background: #333;
  font-weight: 600;
`;

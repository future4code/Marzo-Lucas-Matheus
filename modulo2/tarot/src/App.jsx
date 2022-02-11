import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

const Container = styled.div`
  border: 1px solid red;
  padding: 1rem 2rem;

  ul {
    list-style: none;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
  }
`;

const App = () => {
  const [imagesUrl, setImagesUrl] = useState("");
  const [imageBackCard, setImageBackCard] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("tarot.json").then(({ data }) => {
      console.log(data);
      setImagesUrl(data.imagesUrl);
      setImageBackCard(data.imageBackCard);
      setCards(data.cards.map((card) => ({ ...card, visible: true })));
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ul>
          {cards.map((card) => (
            <li key={card.name}>
              <img src={`${imagesUrl}${card.image}`} alt="" />
            </li>
          ))}
        </ul>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;

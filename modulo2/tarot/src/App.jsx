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

    .image-back-card {
      transition: 0.5s;
      :hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }
`;

const App = () => {
  const [imagesUrl, setImagesUrl] = useState("");
  const [imageBackCard, setImageBackCard] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("tarot.json").then(({ data }) => {
      setImagesUrl(data.imagesUrl);
      setImageBackCard(data.imageBackCard);
      setCards(data.cards.map((card) => ({ ...card, visible: true })));
    });
  }, []);

  function shuffleCards(cards) {
    const numberedArray = cards.map((card) => ({
      ...card,
      number: Math.random(),
    }));
    const sortedCards = numberedArray.sort((a, b) => a.number - b.number);
    return sortedCards;
  }

  function makeCardsInvisible(cards) {
    return cards.map((card) => ({ ...card, visible: false }));
  }

  function onClickStart() {
    const shuffledArray = shuffleCards(cards);
    const invisibleCards = makeCardsInvisible(shuffledArray);
    setCards(invisibleCards);
    alert("Cartas embaralhadas com sucesso.");
  }

  return (
    <>
      <Header onClickStart={onClickStart} />
      <Container>
        <ul>
          {cards.map((card) => (
            <li key={card.name}>
              {card.visible ? (
                <img src={`${imagesUrl}${card.image}`} alt="" />
              ) : (
                <img className="image-back-card" src={imageBackCard} />
              )}
            </li>
          ))}
        </ul>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;

import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [selectedCard, setSelectedCard] = useState(undefined);

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
    toast.success("🃏 Cartas embaralhadas com sucesso!", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  }

  function onClickSelectCard(selectedCard) {
    const newCards = cards.map((card) => {
      if (selectedCard.name === card.name) {
        return { ...selectedCard, visible: true };
      }
      return card;
    });
    setCards(newCards);
    setSelectedCard(selectedCard);
    console.log(selectedCard);
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
                <img
                  className="image-back-card"
                  src={imageBackCard}
                  onClick={() => onClickSelectCard(card)}
                />
              )}
            </li>
          ))}
        </ul>
      </Container>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;

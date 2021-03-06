import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import { CardModal } from "./components/CardModal";
import { Container, Footer } from "./App.styled";

Modal.setAppElement("#root");

const App = () => {
  const [imagesUrl, setImagesUrl] = useState("");
  const [imageBackCard, setImageBackCard] = useState("");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  function handleCloseModal() {
    setIsModalOpen(false);
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
    setIsModalOpen(true);
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
      <CardModal
        selectedCard={selectedCard}
        imagesUrl={imagesUrl}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
      <Footer>
        Feito com 💙 por Lucas Fernandes &copy; {new Date().getFullYear()}
      </Footer>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;

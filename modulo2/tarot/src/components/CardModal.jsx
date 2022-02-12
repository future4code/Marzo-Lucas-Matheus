import React from "react";
import Modal from "react-modal";
import closeImg from "../assets/close.svg";
import { Container } from "./CardModal.styled";

export const CardModal = ({
  isModalOpen,
  handleCloseModal,
  selectedCard,
  imagesUrl,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleCloseModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      {selectedCard && (
        <Container>
          <img src={`${imagesUrl}${selectedCard.image}`} alt="" />
          <div>
            <h1>{selectedCard.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              vitae quae quis qui delectus distinctio aliquam, eum iure autem
              aut cupiditate quia et illum sequi unde officia deserunt
              blanditiis laborum!
            </p>
          </div>
        </Container>
      )}
    </Modal>
  );
};

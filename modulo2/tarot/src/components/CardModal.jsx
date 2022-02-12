import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import closeImg from "../assets/close.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 1rem;
  }
`;

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

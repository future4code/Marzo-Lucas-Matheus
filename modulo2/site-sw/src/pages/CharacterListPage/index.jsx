import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./styles";

export const CharacterListPage = () => {
  const navigate = useNavigate();

  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    api.get("people").then((response) => {
      setCharacterList(response.data.results);
    });
  }, []);

  return (
    <Container>
      {characterList ? (
        characterList.map((char, index) => (
          <p key={char.name} onClick={() => navigate(`/details/${index + 1}`)}>
            {char.name}
          </p>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  );
};

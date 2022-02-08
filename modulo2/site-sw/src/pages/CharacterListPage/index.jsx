import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./styles";

export const CharacterListPage = () => {
  const navigate = useNavigate();

  const [characterList, setCharacterList] = useState([]);

  function getCharacterList() {
    api.get("people").then((response) => {
      console.log(response.data.results);
      setCharacterList(response.data.results);
    });
  }

  useEffect(() => {
    getCharacterList();
  }, []);

  return (
    <Container>
      {characterList.map((char) => (
        <p key={char.name}>{char.name}</p>
      ))}

      <button onClick={() => navigate(`/details/a`)}>List</button>
    </Container>
  );
};

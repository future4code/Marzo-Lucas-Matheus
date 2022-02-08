import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./styles";

export const CharacterDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [details, setDetails] = useState([]);
  const [homeworldLink, setHomeworldLink] = useState("");
  const [homeworld, setHomeworld] = useState("");

  useEffect(() => {
    api.get(`people/${id}`).then((response) => {
      setDetails(response.data);
      setHomeworldLink(response.data.homeworld);
    });
  }, []);

  useEffect(() => {
    homeworldLink &&
      api.get(homeworldLink).then((response) => {
        setHomeworld(response.data);
      });
  }, [homeworldLink]);

  return (
    <Container>
      {homeworldLink ? (
        <>
          <h3>Detalhes de {details.name}</h3>
          <p>Nome: {details.name}</p>
          <p>Origem: {homeworld.name}</p>
          <p>Nascimento: {details.birth_year}</p>
          <button onClick={() => navigate("/")}>Voltar</button>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  );
};

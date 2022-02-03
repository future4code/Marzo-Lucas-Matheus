import styled from "styled-components";

const CardPeopleContainer = styled.div`
  padding: 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  li {
    & + li {
      margin-top: 5px;
    }
  }
`;

export const CardPeople = ({ item }) => {
  return (
    <CardPeopleContainer>
      <h2>{item.name}</h2>
      <ul>
        <li>Altura: {item.height}</li>
        <li>Peso: {item.mass}</li>
        <li>Cor do cabelo: {item.hair_color}</li>
        <li>Cor dos olhos: {item.eye_color}</li>
        <li>Data de nascimento: {item.birth_year}</li>
        <li>Gênero: {item.gender}</li>
      </ul>
    </CardPeopleContainer>
  );
};

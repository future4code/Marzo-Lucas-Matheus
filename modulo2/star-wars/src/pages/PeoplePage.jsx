import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { api } from "../services/api";
import person from "../assets/person.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  padding: 4rem 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const PeoplePage = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    api.get("people").then(({ data }) => setPeople(data.results));
  }, []);

  return (
    <Container>
      <Grid>
        {people.map(({ name }) => (
          <Card name={name} image={person} />
        ))}
      </Grid>
    </Container>
  );
};

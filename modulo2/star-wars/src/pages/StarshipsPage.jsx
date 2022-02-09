import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../services/api";
import ship from "../assets/ship.png";
import { Card } from "../components/Card";

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

export const StarshipsPage = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    api.get("starships").then(({ data }) => setStarships(data.results));
  }, []);

  return (
    <Container>
      <Grid>
        {starships.map(({ name }) => (
          <Card name={name} image={ship} />
        ))}
      </Grid>
    </Container>
  );
};

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../services/api";
import ship from "../assets/ship.png";
import { Card } from "../components/Card";
import { CircleSpinner } from "react-spinners-kit";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("starships").then(({ data }) => {
      setStarships(data.results);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Grid>
        {loading ? (
          <CircleSpinner size={100} color="#686769" loading={loading} />
        ) : (
          starships.map(({ name }) => (
            <Card key={name} name={name} image={ship} />
          ))
        )}
      </Grid>
    </Container>
  );
};

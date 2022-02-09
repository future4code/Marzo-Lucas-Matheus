import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { api } from "../services/api";
import person from "../assets/person.png";
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

export const PeoplePage = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("people").then(({ data }) => {
      setPeople(data.results);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Grid>
        {loading ? (
          <CircleSpinner size={100} color="#686769" loading={loading} />
        ) : (
          people.map(({ name }) => (
            <Card key={name} name={name} image={person} />
          ))
        )}
      </Grid>
    </Container>
  );
};

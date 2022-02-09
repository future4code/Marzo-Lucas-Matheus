import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <h1>Star Wars Catalog</h1>
      <ul>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/starships">
          Starships
        </Link>
        <Link className="link" to="/people">
          People
        </Link>
      </ul>
    </Container>
  );
};

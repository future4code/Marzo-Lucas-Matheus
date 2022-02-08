import React from "react";
import { useNavigate } from "react-router-dom";

export const CharacterListPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      CharacterListPage
      <button onClick={() => navigate(`/details/a`)}>List</button>
    </div>
  );
};

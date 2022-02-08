import React from "react";
import { useNavigate } from "react-router-dom";

export const CharacterDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      CharacterDetailPage
      <button onClick={() => navigate("/")}>List</button>
    </div>
  );
};

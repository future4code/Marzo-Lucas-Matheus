import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharacterListPage } from "./pages/CharacterListPage";
import { CharacterDetailPage } from "./pages/CharacterDetailPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharacterListPage />} />
        <Route path="/details/:id" element={<CharacterDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { CharacterListPage } from "./pages/CharacterListPage";
import { CharacterDetailPage } from "./pages/CharacterDetailPage";
import { api } from "./services/api";

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

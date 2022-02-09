import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomePage, PeoplePage, StarshipsPage } from "./pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/starships" element={<StarshipsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

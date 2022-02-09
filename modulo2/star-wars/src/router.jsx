import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, PeoplePage, StarshipsPage } from "./pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people/:id" element={<PeoplePage />} />
        <Route path="/starships/:id" element={<StarshipsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

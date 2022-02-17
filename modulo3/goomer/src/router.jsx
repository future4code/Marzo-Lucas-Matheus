import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage, Detailspage } from "./pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<Detailspage />} />
      </Routes>
    </BrowserRouter>
  );
};

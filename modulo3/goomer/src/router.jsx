import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage, Detailspage } from "./pages";

export const Router = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://challange.goomer.com.br/restaurants").then(({ data }) => {
      setRestaurants(data);
      setLoading(false);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Homepage restaurants={restaurants} loading={loading} />}
        />
        <Route path="/details/:id" element={<Detailspage />} />
      </Routes>
    </BrowserRouter>
  );
};

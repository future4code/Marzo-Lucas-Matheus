import React from "react";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <h1>Star Wars</h1>
      <Router />
      <GlobalStyle />
    </>
  );
};

export default App;

import React from "react";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
};

export default App;

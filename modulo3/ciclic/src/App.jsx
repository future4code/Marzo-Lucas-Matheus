import { Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { Header, Home, Result } from "./components";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  function renderPage() {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "result":
        return <Result />;
    }
  }

  return (
    <>
      <Header />
      <Container>{renderPage()}</Container>
    </>
  );
};

export default App;

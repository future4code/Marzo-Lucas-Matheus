import React, { useState } from "react";
import { Header, Home, Result } from "./components";

const App = () => {
  const [currentPage, setCurrentPage] = useState("result");

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
      {renderPage()}
    </>
  );
};

export default App;

import React, { useState } from "react";
import { Home, Result } from "./components";

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

  return <>{renderPage()}</>;
};

export default App;

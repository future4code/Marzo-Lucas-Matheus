import { Container } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header, Home, Result } from "./components";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [name, setName] = useState("");
  const [payment, setPayment] = useState("");
  const [time, setTime] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    const body = {
      expr: `${payment} * (((1 + 0.00517) ^ ${time} - 1) / 0.00517)`,
    };
    axios.post("http://api.mathjs.org/v4/", body).then(({ data }) => {
      setResult(Number(data.result).toFixed(2));
    });
  }, [payment, time]);

  function renderPage() {
    switch (currentPage) {
      case "home":
        return (
          <Home
            setCurrentPage={setCurrentPage}
            name={name}
            setName={setName}
            payment={payment}
            setPayment={setPayment}
            time={time}
            setTime={setTime}
          />
        );
      case "result":
        return (
          <Result
            setCurrentPage={setCurrentPage}
            name={name}
            payment={payment}
            time={time}
            result={result}
          />
        );
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

import { useState } from "react";
import "./styles.css";
import { data } from "./data/data";
import { CardPeople } from "./components/CardPeople";

export default function App() {
  const [people, setPeople] = useState([]);

  const renderiza = () => {
    setPeople(data);
  };

  const lista = people.map((item) => {
    return <CardPeople key={item.name} item={item} />;
  });

  return (
    <div className="App">
      <h1>Renderização de lista</h1>
      <button onClick={renderiza}>Renderiza lista</button>
      <div className="List">
        <ul>{lista}</ul>
      </div>
    </div>
  );
}

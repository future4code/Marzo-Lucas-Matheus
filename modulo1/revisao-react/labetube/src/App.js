import React from "react";
import { CardVideo } from "./components/CardVideo";
import { ListItem } from "./components/ListItem";
import "./styles.css";

export default function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <ListItem text={"Início"} />
              <ListItem text={"Em alta"} />
              <ListItem text={"Inscrições"} />
              <hr />
              <ListItem text={"Originais"} />
              <ListItem text={"Histórico"} />
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo image={"https://picsum.photos/400/400?a=1"} />
            <CardVideo image={"https://picsum.photos/400/400?a=2"} />
            <CardVideo image={"https://picsum.photos/400/400?a=3"} />
            <CardVideo image={"https://picsum.photos/400/400?a=4"} />
            <CardVideo image={"https://picsum.photos/400/400?a=5"} />
            <CardVideo image={"https://picsum.photos/400/400?a=6"} />
            <CardVideo image={"https://picsum.photos/400/400?a=7"} />
            <CardVideo image={"https://picsum.photos/400/400?a=8"} />
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

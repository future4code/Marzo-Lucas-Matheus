import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [name, setName] = useState("");

  const axiosConfig = {
    headers: {
      Authorization: "lucas-fernandes-marzo",
    },
  };

  function getAllPlaylists() {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        axiosConfig
      )
      .then((res) => setPlaylists(res.data.result.list));
  }

  function createPlaylist() {
    if (name !== "") {
      axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
          {
            id: Date.now(),
            name,
          },
          axiosConfig
        )
        .then(setName(""));
    }
  }

  useEffect(() => {
    getAllPlaylists();
  }, [playlists]);

  return (
    <div className="App">
      <label>
        Criar Playlist:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome da Playlist"
        />
      </label>
      <button onClick={createPlaylist}>Cadastrar</button>
      <div className="playlist-container">
        {playlists &&
          playlists.map((playlist) => (
            <div key={playlist.id} className="playlist-item">
              {playlist.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;

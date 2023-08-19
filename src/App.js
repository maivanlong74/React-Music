import Header from "./Components/Header/Header";
import "./App.scss"
import NavBody from "./Components/NavBody/Nav";
import DetailMusic from "./Components/Music/DetailMusic/DetailMusic";
import ListMusic from "./Components/Music/ListMusic/ListMusic";
import { Songs } from "./Connect/Context"
import DataSongs from "./Data/songs.json"
import Playing from "./Components/Music/Playing";
import { useState } from "react";

function App() {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if (!song)
      setSong(DataSongs[0])
    else
      setSong(song)
  }
  return (
    <>
      <div className="App">
        <Header />
        <div className="Content-body">
          <NavBody />
          {/* ====================== */}
          <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
            <div className="Body-Body">
              <div className="List-Music">
                <DetailMusic />
                <ListMusic />
              </div>
              <Playing />
            </div>
          </Songs.Provider>
          {/* ======================= */}
        </div>
      </div>
    </>
  );
}

export default App;

import { memo } from "react";
import Header from "../../../Components/Default/Header/Header";
import "../../../Style/App.scss"
import NavBody from "../../../Components/Default/NavBody/Nav";
import { Songs } from "../../../Connect/Context"
import DataSongs from "../../../Data/songs.json"
import { useState } from "react";

const App = ({ children, ...props }) => {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if (!song)
      setSong(DataSongs[0])
    else
      setSong(song)
  }
  return (
      <div className="App" {...props}>
        <Header />
        <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <div className="Content-body">
          <NavBody />
          {/* ====================== */}
          {children}
          {/* ======================= */}
        </div>
        </Songs.Provider>
      </div>
  );
}

export default memo(App);

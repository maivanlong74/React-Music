import { useContext, useEffect, useState } from "react";
import "./ListMusic.scss"
import { AiOutlineDownload } from "react-icons/ai";
import { Songs } from "../../../Connect/Context";

const ListMusic = () => {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setIdSong] = useState(0);
    
    const handlePlaySongs = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    };
    useEffect(() => {
        setIdSong(song.id)
      }, [song])
    return (
        <div className="list-music">
            <div className="table-music">
                <table className="name-listmusic">
                    <thead>
                        <tr className="tieude">
                            <th>#</th>
                            <th>Title</th>
                            <th>Autdor</th>
                            <th>Dowload</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DataSongs.map((song, index) => (
                            <tr className={`list ${idSong === song.id && 'HoverClick'}`}
                            key={index} onClick={() => handlePlaySongs(song.id)}>
                                <td>{index + 1}</td>
                                <td>{song.name}</td>
                                <td>{song.author}</td>
                                <td>
                                    <a href={song.url}><AiOutlineDownload className="dow" /></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListMusic;
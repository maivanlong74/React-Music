import { useContext, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../../Connect/Context";

const Playing = () => {
    const { song, handleSetSong } = useContext(Songs)
    const [audioPlaying, setAudioPlaying] = useState(true);

    const handleClickNext = () => {
        console.log("Clicked Next");
        setAudioPlaying(true);
        handleSetSong(song.id + 1)
    }
    const handleClickPre = () => {
        console.log("Clicked Previous");
        setAudioPlaying(true);
        handleSetSong(song.id - 1)
    }
    return (
        <div className="Play-Music">
            <AudioPlayer
                src={song.url}
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPre}
                onPlay={() => setAudioPlaying(true)} // Cập nhật biến trạng thái khi AudioPlayer chạy
                onPause={() => setAudioPlaying(false)} // Cập nhật biến trạng thái khi AudioPlayer tạm dừng
            />
        </div>
    )
}

export default Playing;
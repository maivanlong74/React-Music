import "./DetailMusic.scss"
import { memo, React, useContext, useEffect, useState } from 'react';
import { Songs } from "../../../Connect/Context";

const DetailMusic = () => {
    const { song } = useContext(Songs)
    const [audioPlaying, setAudioPlaying] = useState(true); // Thêm biến trạng thái

    const rotateImage = () => {
        const rotatingImage = document.getElementById("rotating-image");
        let rotationAngle = 0;

        function animateRotation() {
            rotationAngle += 1;
            rotatingImage.style.transform = `rotate(${rotationAngle}deg)`;
            requestAnimationFrame(animateRotation);
        }

        animateRotation();
    };

    useEffect(() => {
        console.log("audioPlaying has changed:", audioPlaying);
        if (audioPlaying) {
            console.log("aaaaaaaaaaaaa");
          rotateImage(); // Gọi rotateImage khi audioPlaying là true
        }
      }, [audioPlaying]);

    return (
        <div className="detail-music">
            <div className="begin-detail">
                <div className="point"></div>
                <img src={song.links.images[0].url}
                    id="rotating-image" alt="Rotating Image"></img>
                <div className="info-music">
                    <h2>{song.name}</h2>
                    <p>{song.author}</p>
                </div>
            </div>
        </div>
    )
}

export default memo(DetailMusic);
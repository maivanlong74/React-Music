import React, { useState, useEffect, useContext } from "react";
import { Songs } from "../../../Connect/Context";
import "./Animation.scss";
import { AiOutlineDown } from "react-icons/ai";

const AnimationImg = ({ handleScrollClick }) => {
  const { DataSongs, song } = useContext(Songs);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = DataSongs.map((dem, index) => dem.links.images[1].url);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="List-Img">
        <div className="scroll-down">
          <AiOutlineDown className="icon-scroll" id="click-scroll" onClick={handleScrollClick} />
        </div>

        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            className={`Img-Item ${index === activeImageIndex ? 'active' : ''}`}
            style={{ display: index === activeImageIndex ? 'block' : 'none' }}
            alt={`Image ${index}`}
          />
        ))}
      </div>
    </>
  );
};

export default AnimationImg;

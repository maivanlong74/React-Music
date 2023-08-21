import React, { useState, useEffect, useContext } from "react";
import { Songs } from "../../../Connect/Context";
import "./Animation.scss";
import { AiOutlineDown } from "react-icons/ai";

const AnimationImg = ({ handleScrollClick }) => {
  const { DataSongs, song } = useContext(Songs);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const images = DataSongs.map((dem, index) => ({
    nen: dem.links.images[1].url,
    nameSonger: dem.author,
    nameMusic: dem.name,
    avtSonger: dem.links.images[0].url
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="List-Img">
        <div className="scroll-down">
          <AiOutlineDown className="icon-scroll" id="click-scroll" onClick={handleScrollClick} />
        </div>
        <div className="backround-rgba"></div>
        {images.map((path, index) => (
          <div key={index} className={`Img-Item ${index === activeImageIndex ? 'active' : ''}`} style={{ display: index === activeImageIndex ? 'block' : 'none' }}>
            <img src={path.nen} alt={`Image ${index}`} />

            <div className="Info-Music">
              <div className="avt-singer">
                <img src={path.avtSonger} alt={`Singer ${index}`} />
              </div>
              <div className="info-singer">
                <h1>{path.nameMusic}</h1>
                <p>{path.nameSonger}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </>
  );
};

export default AnimationImg;

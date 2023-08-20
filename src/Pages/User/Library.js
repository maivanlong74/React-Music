import { useEffect } from "react";
import AnimationImg from "../../Components/Library/Animation-Img/AnimationImg";
import { AiOutlineDown } from "react-icons/ai";
import "../../Components/Library/Animation-Img/Animation.scss"
import ShowMusic from "../../Components/Library/ShowMusic/ShowMusic";

const Library = () => {
  const scrollToDanhMucSP = () => {
    const danhmucsp = document.getElementById('danhmucsp');
    if (danhmucsp) {
      danhmucsp.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollClick = () => {
    scrollToDanhMucSP();
  };

  return (
    <div className="Body-Library">
      <div className="Show-Animation">
        <AnimationImg handleScrollClick={handleScrollClick}/>
      </div>
      <div className="Show-Music" id="danhmucsp">
        <ShowMusic />
      </div>
    </div>
  );
};

export default Library;

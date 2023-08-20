import { memo } from "react";
import DetailMusic from "../../Components/Discover/DetailMusic/DetailMusic";
import ListMusic from "../../Components/Discover/ListMusic/ListMusic";
import Playing from "../../Components/Discover/Playing";

const Discover = () => {

  return (
    <div className="Body-Body">
      <div className="List-Music">
        <DetailMusic />
        <ListMusic />
      </div>
      <Playing />
    </div>
  )
}

export default memo(Discover);
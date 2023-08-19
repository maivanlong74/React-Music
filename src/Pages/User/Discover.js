import { memo } from "react";
import DetailMusic from "../../Components/Music/DetailMusic/DetailMusic";
import ListMusic from "../../Components/Music/ListMusic/ListMusic";
import Playing from "../../Components/Music/Playing";

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
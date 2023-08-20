import { memo } from "react";
import { MdSearch, MdUpload } from "react-icons/md";
import { TfiArrowLeft, TfiArrowRight, TfiSettings, TfiUser } from "react-icons/tfi";
import "./Nav.scss"

const NavBody = () => {
    return (
        <div className="Header-Body">
            <div className="left-a ct-body">
                <div className="Back-Next">
                    <a href=""><TfiArrowLeft /></a>
                    <a href=""><TfiArrowRight /></a>
                </div>
                <div className="Search">
                    <span><MdSearch /></span>
                    <input placeholder="Tìm kiếm bài yêu thích, nghệ sĩ, lời bài hát..."></input>
                </div>
            </div>
            <div className="right-a ct-body">
                <div className="ct-right">
                    <ul>
                        <li className="dow-win">
                            <a href="">
                                <MdUpload />
                                Tải bản windows
                            </a>
                        </li>
                        <li className="Setting-User">
                            <a href="">
                                <TfiSettings/>
                            </a>
                        </li>
                        <li className="Setting-User">
                            <a href="">
                                <TfiUser />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default memo(NavBody);
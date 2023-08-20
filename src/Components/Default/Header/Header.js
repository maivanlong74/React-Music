import { memo } from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
import { 
    BsFillChatDotsFill, 
    BsFillDiamondFill, 
    BsFillFileEarmarkMusicFill, 
    BsFillFolderFill, 
    BsMusicNoteList, 
    BsStar, 
    BsUiRadiosGrid } from "react-icons/bs";

const Header = () => {
    return (
        <div className="header">
            <div className="Top-content">
                <div className="Logo">
                    <img src="../../Img/logo.jpg"></img>
                </div>
                <div className="Title">
                    <p>Jade Dragon</p>
                </div>
            </div>
            <hr className="hr-menu"></hr>
            <div className="List-menu">
                <div className="menu-a menu">
                    <ul>
                        <li>
                            <Link to={""}>
                                <BsFillDiamondFill />
                                Khám phá
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <BsFillChatDotsFill />
                                Chat
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <BsFillFileEarmarkMusicFill />
                                Radio
                            </Link>
                        </li>
                        <li>
                            <Link to={"thuvien"}>
                                <BsFillFolderFill />
                                Thư viện
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="menu-b menu">
                    <ul>
                        <li>
                            <Link to={""}>
                                <BsMusicNoteList />
                                Bảng xếp hạng
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <BsUiRadiosGrid />
                                Các thể loại
                            </Link>
                        </li>
                        <li>
                            <Link to={""}>
                                <BsStar />
                                Top 100
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="hr-menu"></hr>
            <div className="Botton-account">
                <button type="submit">Login</button>
            </div>
        </div>
    )
}

export default memo(Header);
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
                            <a href="">
                                <BsFillDiamondFill />
                                Khám phá
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsFillChatDotsFill />
                                Chat
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsFillFileEarmarkMusicFill />
                                Radio
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsFillFolderFill />
                                Thư viện
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="menu-b menu">
                    <ul>
                        <li>
                            <a href="">
                                <BsMusicNoteList />
                                Bảng xếp hạng
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsUiRadiosGrid />
                                Các thể loại
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <BsStar />
                                Top 100
                            </a>
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

export default Header;
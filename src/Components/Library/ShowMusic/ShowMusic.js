import { memo, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./ShowMusic.scss";
import { Songs } from "../../../Connect/Context";

const ShowMusic = () => {
    const { DataSongs } = useContext(Songs);
    const [isExpanded, setIsExpanded] = useState([]);
    const listSinger = DataSongs.map((dem, index) => ({
        nameSinger: dem.author,
        avtSinger: dem.links.images[0].url
    }));

    const limitedImages = listSinger.slice(0, 9);

    // Loại bỏ giá trị trùng nhau của dem.author
    const uniqueAuthors = [];
    const filteredImages = limitedImages.filter((limitedImages) => {
        if (!uniqueAuthors.includes(limitedImages.nameSinger)) {
            uniqueAuthors.push(limitedImages.nameSinger);
            return true;
        }
        return false;
    });

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };
    useEffect(() => {
        const ListMusicItems = document.querySelectorAll('.List-Music-item');
        if (ListMusicItems.length > 0) {
            ListMusicItems.forEach(item => {
                const ShowMusic = item.querySelector('.Music-item-list');
                if (ShowMusic) {
                    if (isExpanded) {
                        ShowMusic.style.height = "auto";
                        item.classList.add("padding-bottom");
                    } else {
                        ShowMusic.style.height = "31vh";
                        item.classList.remove("padding-bottom");
                    }
                }
            });
        }
    }, [isExpanded]);

    return (
        <div className="Music-item">

            <ul className="All-Music-Item">
                <li className="List-Music-item">
                    <div className="Music-item-content">
                        <div className="content-a"><h1>Các ca sĩ hot</h1></div>
                        <div className="content-b">
                            <p className="content" onClick={toggleContent}>
                                {isExpanded ? "Ẩn bớt" : "Xem thêm"}
                            </p>
                        </div>
                    </div>
                    <div className="Music-item-list">
                        <ul>
                            {filteredImages.map((song, index) => (
                                <li key={index}>
                                    <Link to="{}">
                                        <img src={song.avtSinger}></img>
                                        <div className="name-singer">
                                            <p>{song.nameSinger}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default memo(ShowMusic);


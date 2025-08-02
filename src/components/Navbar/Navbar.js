import React, {useContext} from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import emojiContext from "../../context/emojiContext";

const Navbar = ()=>{
    return(
        <div className="Navbar">
            <div className="Navbar_container">
                <div className="title_container">
                    <div className="icon_container">
                        <img className="emoji_icon" src="/favicon.png" />
                    </div>
                    <h3 className="Navbar_title">Emoji Explorer</h3>
                </div>
                <div></div>
                <ul className="Nabar_list">
                    <li>
                        <Link to="/" className="Navbar_list_item">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/search" className="Navbar_list_item">
                            <span>Search</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="Navbar_list_item">
                            <span>About Site</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
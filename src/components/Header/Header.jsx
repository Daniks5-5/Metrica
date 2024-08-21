import React from "react";
import "./Header.css";
import Metrica from "../../assets/metrica.svg";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
    const [nav, setNav] = useState(false);

    return (
        <header>
            <div>
                <img src={Metrica} alt="Логотип" />
            </div>
            <nav>
                <ul className={nav ? "menu active" : "menu"}>
                    <li><a href="#AboutSection">О НАС</a></li>
                    <li><a href="#Project">ПРОЕКТЫ</a></li>
                    <li><a href="#section">УСЛУГИ</a></li>
                    <li><a href="#ContactSection">КОНТАКТЫ</a></li>
                </ul>
                <div onClick={() => setNav(!nav)} className="mobile-btn">
                    {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
            </nav>
        </header>
    );
}

export default Header;
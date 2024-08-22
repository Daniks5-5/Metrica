import React from "react";
import "./Header.css";
import Metrica from "../../assets/metrica.svg";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
    const [nav, setNav] = useState(false);

    const handleMenuClick = () => {
        setNav(false); // Закрываем меню при нажатии на ссылку
    };

    return (
        <header>
            <div>
                <img src={Metrica} alt="Логотип" />
            </div>
            <nav>
                <ul className={nav ? "menu active" : "menu"}>
                    <li><a href="#AboutSection" onClick={handleMenuClick}>О НАС</a></li>
                    <li><a href="#Project" onClick={handleMenuClick}>ПРОЕКТЫ</a></li>
                    <li><a href="#section" onClick={handleMenuClick}>УСЛУГИ</a></li>
                    <li><a href="#ContactSection" onClick={handleMenuClick}>КОНТАКТЫ</a></li>
                </ul>
                <div onClick={() => setNav(!nav)} className="mobile-btn">
                    {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
                <div className="unActive"></div>
            </nav>
        </header>
    );
}

export default Header;
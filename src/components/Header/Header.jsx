import React from "react";
import "./Header.css";
import Metrica from "../../assets/metrica.svg";


function Header(){
    return(
        <header>
            <div>
                <img src={Metrica} alt="" />
            </div>
            <nav>
                <ul>
                    <li><a href="#AboutSection">О НАС</a></li>
                    <li><a href="#Project">ПРОЕКТЫ</a></li>
                    <li><a href="#section">УСЛУГИ</a></li>
                    <li><a href="#ContactSection">КОНТАКТЫ</a></li>
                </ul>
            </nav>



        </header>

    );

}

export default Header;
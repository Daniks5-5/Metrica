import React from "react";
import Popup from "reactjs-popup";
import "./ServiceButton.css";

function ServiceButton(props) {
    return (
        <div className="ServiceButtonSection">
            <Popup role="dialog" trigger={<button className="ServiceButton">{props.text}</button>} position=" bottom ">
                <div className="popup-back">
                    <div className="popup-content">
                        <div className="popup-text">
                            <h1> Заказать услугу </h1>
                            <p> Заполните форму, мы свяжемся с вами в течение суток </p>
                        </div>
                        <div className="popup-input">
                            <input type="text" placeholder="Имя" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Номер телефона" />

                        </div>
                        <button className="popup-button"> Отправить </button>

                    </div>

                </div>
            </Popup>
        </div>

    );
}


export default ServiceButton;
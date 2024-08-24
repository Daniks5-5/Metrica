import React from "react";
import Popup from "reactjs-popup";
import "./ServiceButton.css";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';

function ServiceButton(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

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
                            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                                <input {...register("firstName")} placeholder="Имя " />
                                <input {...register("email")} placeholder="Email" />
                                <InputMask
                                    mask="+7 (999) 999-99-99"
                                    {...register('phone', {
                                        required: 'Поле обязательно для заполнения',
                                        pattern: {
                                            value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                                            message: 'Неверный формат номера телефона'
                                        }
                                    })}>
                                    {(inputProps) => <input {...inputProps} type="tel" placeholder="+7 (___) ___-__-__" />}
                                    </InputMask>



                            </form>







                            {/* <input type="text" placeholder="Имя" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Номер телефона" /> */}

                        </div>
                        <button className="popup-button"> Отправить </button>

                    </div>

                </div>
            </Popup>
        </div>

    );
}


export default ServiceButton;
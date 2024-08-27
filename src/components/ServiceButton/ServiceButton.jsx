import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./ServiceButton.css";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';


const [info, setInfo] = useState([]); //ук useState для обработки данных, полученных из Firestore

const fetchPost = async () => {

    await getDocs(collection(db, "todos")) // getDocs для получения данных из коллекции
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                setInfo(newData);                
            console.log(info, newData);
        })

}

useEffect(()=>{
    fetchPost();
}, [])



function ServiceButton(props) {
    const [numPhone, setNumPhone] = useState("");
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    const addInfo = (e) => {
        e.preventDefault();        
    }

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
                                <input onChange={(e)=> setNumPhone(e.target.value)} {...register("firstName")} placeholder="Имя " />
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


                        </div>
                        <button className="popup-button" onClick={addInfo}> Отправить </button>

                    </div>

                </div>
            </Popup>
        </div>

    );
}


export default ServiceButton;
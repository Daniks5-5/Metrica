import React from "react";
import Heading from "../Heading/Heading";
import './ContactsSection.css';

function ContactsSection() {

    return (

        <div className="ContactsSection">
            <Heading
                level='h2'
                text='Контакты'
            />
            <div>
                <div className="phone">
                    <p className="phone-text"> +7 935  895-45-35 </p>
                    
                    <a className="email-text" href="mailto: hello@mail.com"> hello@mail.com </a>
                </div>
            </div>
        </div>




    );

}

export default ContactsSection;
import React from "react";
import Heading from "../Heading/Heading";
import './HeroSection.css';

  function HeroSection(){
    return(
        <div className="HeroSection">
               <Heading
               level = "h1"
               text = "Современные и стильные интерьеры для комфортной жизни"
               
               />
        <div className="main-img"> 
            <p>Мы - команда квалифицированных дизайнеров и архитекторов, занимающихся разработкой и реализацией дизайн-проектов</p>

        </div>
             </div>
     
    );
  }
  
  export default HeroSection;
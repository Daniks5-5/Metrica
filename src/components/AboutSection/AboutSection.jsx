import React from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import './AboutSection.css';


function AboutSection(){
    return(
      <div> 
        <Heading />
        <div class = "About"> <p> Студия основана в 2011 году. Полностью отдаемся проектированию и реализации интерьеров. К нам обращаются за уютом, индивидуальными решениями и практичностью. Находим конструктивные решения для каждого интерьера, вплоть до каждой детали — нацелены на результат. </p>  </div>
        <Button />
      </div>
    );
  }
  
  export default AboutSection;
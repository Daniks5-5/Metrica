import React from "react";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

function ProjectCard(){
    return(
   <div>
        <div>
            <label htmlFor="">NEW</label>
       
        <img src={project1} alt="" />
        <p> ЖК ПРАВОБЕРЕЖНЫЙ — 112 м² — 2023 </p>
        <a href=""> Подробнее </a>
        </div>

   </div>
  
    );
  }
  
  export default ProjectCard;
import React from "react";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

function ProjectCard(props){
    console.log(props);
    return(
   <div>
    {props.isNew && (<div> isNew </div>)}
        <div>
        <div>{props.isNew}</div>
       
        <img src={props.image} alt={props.title} />
        <p> {props.title} {props. square} {props.year} </p>
        <a href={props.link}> Подробнее </a>
        </div>

   </div>
  
    );
  }
  
  export default ProjectCard;
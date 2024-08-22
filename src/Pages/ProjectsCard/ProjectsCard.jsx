import React from "react";
import "./ProjectsCard.css";

function ProjectsCard(props){
    return(
        <div className="card">
            <img className = "card__photo" src={props.img} alt=""/>
            <div className="card__text">
                <p> {props.text} </p>

            </div>

        </div>


    );
}

export default ProjectsCard;
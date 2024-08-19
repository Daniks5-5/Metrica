import React from "react";
import "./ServiceCard.css";



function ServiceCard(props){
    console.log('---');
   console.log(props);
    return(
        <div className="card">
            <div className="img-rel">
                <img className="img" src={props.image} alt="" />
               <div className="event-rel">
               <div className="event">
                    <p className="event__text"> {props.event} </p>

                </div>

               </div>
             
            </div>
            <p className="card__text"> {props.text} </p>


        </div>
  
  
  
  
    );
  }
  
  export default ServiceCard;
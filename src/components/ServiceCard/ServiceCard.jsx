import React from "react";


function ServiceCard(props){
    console.log('---');
   console.log(props);
    return(
        <div className="card">
            <div className="img-rel">
                <img src={props.image} alt="" />
                <div className="event">
                    <p className="event__text"> {props.event} </p>

                </div>
            </div>
            <p className="card__text"> {props.text} </p>


        </div>
  
  
  
  
    );
  }
  
  export default ServiceCard;
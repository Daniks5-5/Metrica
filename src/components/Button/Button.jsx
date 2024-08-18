import React, {useState} from "react";
import './Button.css';

  function Button(props){
    return(
        <div>
            <button> {props.text} </button>
             </div>
     
    );
  }
  
  export default Button;
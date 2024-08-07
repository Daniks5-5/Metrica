import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

function ProjectsSection(){
    return(
   <div>
  
    <div> 
     
    <Heading 
    level = 'h2'
    text = 'ПРОЕКТЫ'
    
    
    />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <Button text='Смотреть все проекты' />
     

    </div>




   </div>
  
    );
  }
  
  export default ProjectsSection;
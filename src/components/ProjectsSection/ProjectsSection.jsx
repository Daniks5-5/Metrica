import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import projectPhoto1 from "../../assets/project1.jpg"
import projectPhoto2 from "../../assets/project2.png"
import projectPhoto3 from "../../assets/project3.png"

const projects = [
        {
                title: 'ЖК ПРАВОБЕРЕЖНЫЙ —',
                square: 112+'м²—',
                year :'2023',
                link : '/',
                image: projectPhoto1,
                isNew : true
        },
        {
                title:'ЖК НОРВЕЖСКИЙ ПАРК —',
                square:75+'м²—',
                year: '2023',
                link :'/',
                image:projectPhoto2,
                isNew: false
        },
        {
                title:'ЖК СОСНОВСКИЕ ОЗЕРА —',
                square:94+'м²—',
                year:'2022',
                link : '/',
                image: projectPhoto3,
                isNew: false
        }
]



function ProjectsSection(){
    return(
   <div>
    <div> 
    <Heading 
    level = 'h2'
    text = 'ПРОЕКТЫ'
    />
    {projects.map(project =>( //отрисовываю объекты из массива
           <ProjectCard 
                title={project.title}
                square={project.square}
                year = {project.year}
                link = {project.link}
                image={project.image}
                isNew = {project.isNew}
                />)

    )}        
            <Button text='Смотреть все проекты' />
    </div>
   </div>
  
    );
  }
  
  export default ProjectsSection;
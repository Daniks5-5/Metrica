import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import './ProjectSection.css';
import Heading from "../Heading/Heading";
import projectPhoto1 from "../../assets/project1.jpg";
import projectPhoto2 from "../../assets/project2.png";
import projectPhoto3 from "../../assets/project3.png";
import { Link } from "react-router-dom"; // Импортируем Link

const projects = [
    {
        title: 'ЖК ПРАВОБЕРЕЖНЫЙ —',
        square: 112 + 'м²—',
        year: '2023',
        link: '/',
        image: projectPhoto1,
        isNew: true
    },
    {
        title: 'ЖК НОРВЕЖСКИЙ ПАРК —',
        square: 75 + 'м²—',
        year: '2023',
        link: '/',
        image: projectPhoto2,
        isNew: false
    },
    {
        title: 'ЖК СОСНОВСКИЕ ОЗЕРА —',
        square: 94 + 'м²—',
        year: '2022',
        link: '/',
        image: projectPhoto3,
        isNew: false
    }
];

function ProjectsSection() {
    return (
        <div className="Project" id="Project">
            <div className="Project__arr">
                <Heading
                    level='h2'
                    text='ПРОЕКТЫ'
                />
                {projects.map(project => ( // Отрисовываю объекты из массива
                    <ProjectCard
                        key={project.title} // Добавил уникальный ключ для каждого элемента
                        title={project.title}
                        square={project.square}
                        year={project.year}
                        link={project.link}
                        image={project.image}
                    />
                ))}
                <Link to="/projects"> {/* Используем Link для навигации */}
                    <button className="project-button">Смотреть все проекты</button>
                </Link>
            </div>
        </div>
    );
}

export default ProjectsSection;
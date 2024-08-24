import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Projects.css";
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";
import gallery4 from "../../assets/gallery4.png";
import ProjectsCard from "../ProjectsCard/ProjectsCard";


const projectsArr = [
    {
        img: gallery1,
        text: 'Проект  Двухкомнтаной квартиры в ЖК Лесной Пейзаж',
        id: 1
    },
    {
        img: gallery2,
        text: 'Проект гостиной в ЖК Маяк',
        id: 2
    },
    {
        img: gallery3,
        text: 'Визуализация кухни-гостиной в частном доме',
        id: 3
    },
    {

        text: 'Проект кухни в скандинавском стиле для ЖК Северный Ветер',
        img: gallery4,
        id: 4
    }
]


function Projects() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div className="Projecst">
            {projectsArr.map(project => (
                <ProjectsCard
                    key={project.id}
                    text={project.text}
                    img={project.img}
                />
            ))}

            <div>
                <button onClick={handleClick}>Вернуться на главную страницу</button>
            </div>


        </div>
    );
}

export default Projects;
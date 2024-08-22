import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link


function Projects() {
    return (
        <div>
            <h1>Тут работы</h1>
            <Link to="/">
                <button>Вернуться на главную страницу</button>
            </Link>
        </div>
    );
}

export default Projects;
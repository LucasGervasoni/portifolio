"use client";
import estilos from "./ProjectCard.module.css";
import { useState } from "react";

export default function ProjectCard({ projects }) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div id={estilos.Card}>
      {projects.map((projeto, index) => (
        <div key={index} className={estilos.card}>
          <div className={estilos.hero_projects}>
            <figure className={estilos.project_img}>
              <img src={projeto.project_image} alt={projeto.name} />
            </figure>
            <div className={estilos.hero_info}>
              <h3 className={estilos.project_name}>{projeto.name}</h3>
              <p className={estilos.project_desc}>{projeto.desc}</p>
            </div>
          </div>
          <a
                className={estilos.project_link}
                href={projeto.link}
                target="_blank"
              >
                Source Code
              </a>
        </div>
      ))}
    </div>
  );
}

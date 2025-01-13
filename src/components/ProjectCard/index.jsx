'use client'
import estilos from './ProjectCard.module.css';
import { useState } from 'react'

export default function ProjectCard({ projects }) {

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div id={estilos.Card}>
    {projects.map((projeto, index) => (
      index === currentProjectIndex && (
      <div key={index} className={estilos.card}>
        <div className={estilos.hero_projects}>
        <span onClick={handlePrev} className={estilos.prev}><img src="./util/prev.svg" alt="" /></span>
          <figure>
            <img style={{ width: '700px', height: '500px'}} src={projeto.project_image} alt="" />
          </figure>
          <span onClick={handleNext} className={estilos.next}><img src="./util/next.svg" alt="" /></span>
        </div>

        <div className={estilos.hero_info}>
          <h3 className={estilos.project_name}>{projeto.name}</h3>
          <ul className={estilos.project_skills}>
          {projeto.tecnologias.map((tech, idx) => (
                <li className={estilos.project_skill} key={idx}>
                  <img
                    style={{ width: '32px', height: '32px' }}
                    src={tech.icone}
                    alt={tech.nome}
                  />
                  <p className={estilos.skill_name}>{tech.nome}</p>
                </li>
              ))}
          </ul>
          <p className={estilos.project_desc}>{projeto.desc}
          </p>
          <a className={estilos.project_link} href={projeto.link} target='_blank'>View Project</a>
        </div>
      </div>
    )))}
    </div>
  );
}
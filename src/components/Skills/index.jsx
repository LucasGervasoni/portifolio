import estilos from "./Skills.module.css"

export default function Skills(){

  const skills = [
    { src: "/skills/amazonwebservices.svg", alt: "AWS" },
    { src: "/skills/bootstrap.svg", alt: "bootstrap" },
    { src: "/skills/css3.svg", alt: "css" },
    { src: "/skills/django.svg", alt: "django" },
    { src: "/skills/express.svg", alt: "express" },
    { src: "/skills/spring.svg", alt: "spring boot" },
    { src: "/skills/git.svg", alt: "git" },
    { src: "/skills/heroku.svg", alt: "heroku" },
    { src: "/skills/html5.svg", alt: "html" },
    { src: "/skills/javascript.svg", alt: "javascript" },
    { src: "/skills/jquery.svg", alt: "jquery" },
    { src: "/skills/mysql.svg", alt: "mysql" },
    { src: "/skills/nestjs.svg", alt: "nestjs" },
    { src: "/skills/nextjs.svg", alt: "nextjs" },
    { src: "/skills/nodejs.svg", alt: "nodejs" },
    { src: "/skills/postgresql.svg", alt: "postgresql" },
    { src: "/skills/python.svg", alt: "python" },
    { src: "/skills/react.svg", alt: "react" },
    { src: "/skills/sass.svg", alt: "sass" },
    { src: "/skills/tailwindcss.svg", alt: "tailwind" },
    { src: "/skills/typescript.svg", alt: "typescript" },
    { src: "/skills/java.svg", alt: "java" },
    { src: "/skills/figma.svg", alt: "figma" },
  ];

  return(
    <div className={estilos.icons}>
      <ul className={estilos.icons_list}>
      {skills.map((skill, index) => (
          <li key={index} className={`${estilos.icon} ${estilos[`icon${index + 1}`]}`}>
            <img src={skill.src} alt={skill.alt} />
          </li>
        ))}
      </ul>
    </div>
    
  )
}
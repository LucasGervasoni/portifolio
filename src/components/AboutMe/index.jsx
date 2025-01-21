import estilos from './AboutMe.module.css'

export default function AboutMe(){
  return(
    <section className={estilos.heroAbout}>
      <h2 className={estilos.titleAbout}>
        About Me
      </h2>
      <p className={estilos.content}>
      <strong className={estilos.bold}>Hi there! 👋</strong><br/>
        I'm Lucas, a Full Stack Developer at the beginning of my career, passionate about technology and solving real-world problems through coding.
        </p>
      <p className={estilos.content}>
      <strong className={estilos.bold}>My Journey</strong><br/>
        From a young age, I’ve been curious about understanding how things work, which led me to explore the world of technology. Today, I dedicate my time to learning, creating, and growing as a developer. With every project, I see an opportunity to transform ideas into impactful solutions.
        </p>
      <p className={estilos.content}>
      <strong className={estilos.bold}>My Skills</strong><br/>
        I have experience working with modern technologies that enable me to build complete and functional applications:<br/><br/>
        <b>Front-end:</b> HTML, SCSS, Javascript, React, Bootstrap, Angular,<br/>
        <b>Back-end:</b> Python, Nodejs, Django, Typescript, REST APIs,<br/>
        <b>Databases:</b> SQL, MySQL, PostgreSQL, SQLite,<br/>
        <b>Infraestructure:</b> AWS (S3, EC2, RDS), Heroku, and BunnyCDN,<br/>
        <b>Tools:</b> Git, Excel, Word, Powerpoint, PowerBI,<br/><br/>
        I'm always eager to explore new tools and frameworks to expand my expertise.
        </p>
      <p className={estilos.content}>
      <strong className={estilos.bold}>Why Work With Me?</strong><br/>
        I’m proactive, curious, and committed to continuous learning. I believe every technical challenge is an opportunity for growth, and I’m always ready to collaborate with teams that value innovation, creativity, and determination.
        </p>
      <p className={estilos.content}>
        <strong className={estilos.bold}>Let’s Connect!</strong><br/>
        If you’re looking for someone with energy, dedication, and a thirst for knowledge to join your team, feel free to reach out!
      </p>
      <div className={estilos.btns}>
          <a href="https://docs.google.com/document/d/1u96uK6k_yEJ5IvKGmi6Bod_oLFPCOhP2/edit?usp=sharing&ouid=105667573885847009685&rtpof=true&sd=true" target="_blank" download className={`${estilos.btn} ${estilos.btn_cv}`}>Download CV</a>
          <a href="mailto:lucasgerva11229@gmail.com" className={`${estilos.btn} ${estilos.btn_contact}`}>Contact me</a>
          <a href="https://github.com/LucasGervasoni" target="_blank"><img src="/social/Git.svg" alt="github" /></a>
          <a href="https://www.linkedin.com/in/lucasgervasoni/" target="_blank"><img src="/social/Linkedin.svg" alt="linkedin" /></a>
      </div>
    </section>
  )
}
import estilos from "./Hero.module.css"

export default function Hero(){
  return(
    <div className={estilos.center}>
      <section className={estilos.hero}>
        <p className={estilos.intro}>Olá me chamo,</p>
        <h1 className={estilos.nome}>Lucas Gervasoni</h1>
        <p className={estilos.ocupacao}>Full Stack Developer</p>
        <div className={estilos.btns}>
          <a href="https://drive.google.com/file/d/1sQO5KCQyM5-DZyf-7bSuI_Juq99QWVT4/view?usp=drive_link" target="_blank" download className={`${estilos.btn} ${estilos.btn_cv}`}>Download CV</a>
          <a href="mailto:lucasgerva11229@gmail.com" className={`${estilos.btn} ${estilos.btn_contact}`}>Contate me</a>
        </div>
        <div className={estilos.social}>
          <a href="https://github.com/LucasGervasoni" target="_blank"><img src="/social/Git.svg" alt="github" /></a>
          <a href="https://www.linkedin.com/in/lucasgervasoni/" target="_blank"><img src="/social/Linkedin.svg" alt="linkedin" /></a>
        </div>
      </section>
    </div>
  )
}
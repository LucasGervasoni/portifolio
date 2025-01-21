import estilos from "./Hero.module.css"

export default function Hero(){
  return(
    <div className={estilos.center}>
      <section className={estilos.hero}>
        <p className={estilos.intro}>Hello I'm,</p>
        <h1 className={estilos.nome}>Lucas Gervasoni</h1>
        <p className={estilos.ocupacao}>Full Stack Developer</p>
        <div className={estilos.btns}>
          <a href="https://docs.google.com/document/d/1u96uK6k_yEJ5IvKGmi6Bod_oLFPCOhP2/edit?usp=sharing&ouid=105667573885847009685&rtpof=true&sd=true" target="_blank" download className={`${estilos.btn} ${estilos.btn_cv}`}>Download CV</a>
          <a href="mailto:lucasgerva11229@gmail.com" className={`${estilos.btn} ${estilos.btn_contact}`}>Contact me</a>
        </div>
        <div className={estilos.social}>
          <a href="https://github.com/LucasGervasoni" target="_blank"><img src="/social/Git.svg" alt="github" /></a>
          <a href="https://www.linkedin.com/in/lucasgervasoni/" target="_blank"><img src="/social/Linkedin.svg" alt="linkedin" /></a>
        </div>
      </section>
    </div>
  )
}
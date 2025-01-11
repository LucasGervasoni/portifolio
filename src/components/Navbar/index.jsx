import estilos from "./Navbar.module.css"
import Link from 'next/link';

export default function Navbar(){
  return(
    <navbar className={estilos.navbar}>
      <div className={estilos.logo}>
        <h2>Lucas Gervasoni</h2>
      </div>
      <ul className={estilos.links}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/Projetos">Projects</Link></li>
      </ul>
    </navbar>
  )
}
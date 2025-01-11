import styles from "./page.module.css";
import Hero from "@/components/Hero/index"
import Skills from "@/components/Skills/index"

export default function Home() {
  return (
    <>
    <section id={styles.hero}>
      <Hero />
      <Skills />
    </section>
    </>
  );
}

import styles from "./About.module.css";

import SectionTitle from "@/app/ui/SectionTitle";

import Image from "next/image";

function About() {
  return (
    <section id="about">
      <SectionTitle title="À propos de moi 👨🏻‍💻" />
      <div className={styles.container}>
        <Image
          src="/assets/me-lg.webp"
          alt="Photo de moi en plus grand"
          width={449}
          height={600}
          className={styles.profile}
        />
        <div className={styles.box}>
          <h3>Mon parcours</h3>
          <p className={styles.text}>
            Je m&apos;appelle <span>Nathan</span> et je suis développeur web. 🚀
            Je réalise des sites web pour qui en a besoin. J&apos;ai toujours
            été plus attiré par ce genre de développement qu&apos;autre chose.
            Je tire une satisfaction personnelle à voir mes projets prendre vie
            et à les voir évoluer. 📈
          </p>
          <p className={styles.text}>
            Je suis diplômé <span>avec distinction</span> de HELMo en tant que
            bachelier en développement d&apos;application depuis l&apos;année
            2022. 👨🏻‍🎓
          </p>
          <h3>Mes valeurs</h3>
          <p className={styles.text}>
            Comme développeur web engagé, j&apos;accompagne les entreprises dans
            la création d&apos;applications les plus <span>performantes</span>{" "}
            que possible 🍃, <span>écoresponsables</span> 🌱 et{" "}
            <span>respectueuses</span> de la vie privée de leurs utilisateurs
            🔐. Pour arriver à ces objectifs, je mets en place des méthodes
            d&apos;<span>optimisation</span> de chaque projet afin qu&apos;ils
            soient les plus réactifs possibles.
          </p>
        </div>
        <div className={styles.box}>
          <h3>Pourquoi moi ?</h3>
          <p className={styles.text}>
            Je suis quelqu&apos;un de <span>curieux</span>. Cela ne concerne pas
            que le développement. J&apos;aime me renseigner sur la{" "}
            <span>musculation</span>, le <span>développement personnel</span> et
            la <span>productivité</span>. 🧠 J&apos;aime apprendre de nouvelles
            choses chaque jour et je suis toujours à la recherche de la
            meilleure solution face aux problèmes que je rencontre. J&apos;aime
            aussi <span>partager</span> mes connaissances avec les autres. Je
            fais toujours mon possible pour être le meilleur dans ce que je
            réalise. 🏆
          </p>
          <h3>Mes compétences</h3>
          <p className={styles.text}>
            Je pars d&apos;un principe simple, il m&apos;est impossible de tout
            connaître. Alors j&apos;ai préféré me limiter à quelques domaines
            seulement et de les connaître le plus en profondeur que possible. 📚
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

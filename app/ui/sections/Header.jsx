import ButtonCta from "@/app/ui/buttons/ButtonCta";
import styles from "./Header.module.css";
import Image from "next/image";
import { Suspense, lazy } from "react";
const AnimatedLogo = lazy(() => import("../AnimatedLogo"));

function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="assets/svg/planet.svg"
        alt="Planet"
        className={styles.planet}
        width={200}
        height={200}
      />
      <Suspense fallback={<div>Chargement de l&apos;animation...</div>}>
        <AnimatedLogo className={styles.profil} />
      </Suspense>
      <h1 className={styles.title}>Nathan Lemoine</h1>
      <h2 className={styles.subtitle}>
        Développeur web <strong>passioné</strong> 🤩
      </h2>
      <p className={styles.description}>
        Je vous aide à réaliser vos projets web et à atteindre les objectifs que
        vous vous êtes fixés. 🚀 Je suis convaincu qu&apos;en faisant le bien,
        nous créons un impact positif qui se propage bien au-delà de nos
        réalisations. Nous changeons des vies ! 💫
      </p>
      <p className={styles.description}>
        Alors si vous souhaitez franchir un cap, n&apos;hésitez pas à me
        contacter via le bouton ci-dessous 👇🏻 Ou à prendre rendez-vous avec moi.
      </p>
      <div className={styles.cta}>
        <ButtonCta
          text="Me contacter"
          link="mailto:contact.lemoine.nathan@pm.me"
        />
      </div>
    </header>
  );
}

export default Header;

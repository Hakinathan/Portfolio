"use client";

import styles from "./styles/Error.module.css";

export default function Error({ error, reset }) {
  return (
    <main className={styles.container}>
      <h1 className={styles.text}>Quelque chose s&apos;est mal passé..</h1>
      <p className={styles.message}>Une erreur inconnue est survenue.</p>
      <button className={styles.button} onClick={() => reset()}>
        Retour à l&apos;accueil
      </button>
    </main>
  );
}

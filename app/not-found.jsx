import Link from "next/link";
import styles from "./styles/NotFound.module.css";

export default async function NotFound() {
  return (
    <main className={styles.container}>
      <h1 className={styles.text}>Page 404</h1>
      <p className={styles.message}>
        La page que vous cherchez n&apos;existe pas.
      </p>
      <Link href="/" className={styles.link}>
        Retourner à l&apos;accueil
      </Link>
    </main>
  );
}

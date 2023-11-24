import styles from "./Advantages.module.css";
import Link from "next/link";

function Advantages() {
  const xp = new Date().getFullYear() - 2022;

  return (
    <section className={`${styles.grid} ${styles.container}`} id="advantage">
      <div className={styles.item}>
        <h3 className={styles.subtitle}>
          Qu&apos;obtenez-vous en travaillant avec moi <span>?</span>
        </h3>
        <ul className={styles.list}>
          <li>
            Un site personnalisé pour refléter l&apos;identité unique de votre
            entreprise.
          </li>
          <li>
            Des performances optimales grâce à une conception technique soignée
            et des technologies avancées.
          </li>
          <li>
            Une interface esthétiquement attrayante et en accord avec les
            dernières tendances du design.
          </li>
          <li>
            Un design responsive assurant une adaptation parfaite sur tous les
            types d&apos;appareils.
          </li>
          <li>Et bien plus encore...🚀</li>
        </ul>
        <Link href="#services" className={styles.btn}>
          En savoir plus 👇🏻
        </Link>
      </div>
      <div className={`${styles.subgrid}`}>
        <div className={`${styles.subitem}`}>
          <span className={styles.orange}>Diplômé</span>
        </div>
        <div className={styles.subitem}>
          <span className={styles.green}>{xp} années</span>
          d&apos;expériences
        </div>
        <div className={`${styles.subitem} ${styles.end}`}>
          <span className={styles.blue}>Satisfaction client</span>
        </div>
      </div>
      <div className={`${styles.item} ${styles.end} ${styles.center}`}>
        <h3 className={styles.subtitle}>
          Pourquoi investir dans un site internet qui <span>marque</span> les
          esprits <span>?</span>
        </h3>
        <p className={styles.text}>
          On est en droit de se demander pourquoi avoir un site web aux
          standards actuels et optimiser à l&apos;heure actuelle ? On pourrait
          penser au premier abord que cela n&apos;est pas utile. Sauf que ce
          n&apos;est pas vrai.
        </p>
        <ul className={styles.list}>
          <li className={styles.advantage}>
            Cela impacte <strong>négativement</strong> votre image de marque.
          </li>
          <li className={styles.advantage}>
            Cela <strong>ne donne pas</strong> confiance dans la marque.
          </li>
          <li className={styles.advantage}>
            Il y a une <strong>diminution</strong> de la valeur perçue du
            produit.
          </li>
          <li className={styles.advantage}>
            Le site web <strong>ne répond pas</strong> à l&apos;attente de
            l&apos;utilisateur
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Advantages;

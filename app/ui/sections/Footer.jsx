import { BiLogoLinkedin } from "react-icons/bi";
import { FiTwitter, FiMail, FiGithub } from "react-icons/fi";

import styles from "./Footer.module.css";

const socialLogos = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nathan-lemoine-dev/",
    logo: <BiLogoLinkedin />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/NathouL22",
    logo: <FiTwitter />,
  },
  {
    name: "Mail",
    link: "mailto:contact.nathan.lemoine@pm.me",
    logo: <FiMail />,
  },
  {
    name: "Github",
    link: "https://github.com/Hakinathan",
    logo: <FiGithub />,
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        <p className={styles.text}>
          Nathan Lemoine - Tous droits réservés - &copy;
          {new Date().getFullYear()}
        </p>
        <p className={styles.text}>
          Numéro BCE : <strong>0804.552.840</strong>
        </p>
      </div>
      <div className={styles.links}>
        {socialLogos.map((logo, index) => (
          <a
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className={styles.link}
            aria-label={`Voir le profil sur ${logo.name} dans un nouvel onglet`}
          >
            {logo.logo}
          </a>
        ))}
      </div>
      <p className={styles.end}> Made with ♥ by me with Next.js</p>
    </footer>
  );
}

export default Footer;

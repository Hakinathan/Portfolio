import ServiceCard from "@/app/ui/cards/ServiceCard";
import { BiServer } from "react-icons/bi";
import {
  MdOutlineSettings,
  MdOutlineScreenshotMonitor,
  MdOutlineDesignServices,
  MdAutoGraph,
} from "react-icons/md";
import { LuMedal } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";

import styles from "./Services.module.css";
import SectionTitle from "@/app/ui/SectionTitle";

const services = [
  {
    name: "Audit de votre site web",
    features: [
      {
        name: "Design",
        icon: <MdOutlineDesignServices className={styles.icon} />,
        description:
          "Le design de votre site internet est-il aux standard actuels ?",
      },
      {
        name: "Performances",
        icon: <AiOutlineThunderbolt className={styles.icon} />,
        description:
          "Analyse des performances actuelles de votre site internet",
      },
      {
        name: "Améliorations",
        icon: <MdAutoGraph className={styles.icon} />,
        description: "Liste d'améliorations recommandées",
      },
    ],
  },
  {
    name: "Création d'application web",
    features: [
      {
        name: "Site sur mesure",
        icon: <MdOutlineScreenshotMonitor className={styles.icon} />,
        description: "Site adapté à vos besoins et à tous les écrans",
      },
      {
        name: "Optimisé",
        icon: <LuMedal className={styles.icon} />,
        description: "Pour un site rapide et bien référencé",
      },
      {
        name: "Maintenance",
        icon: <MdOutlineSettings className={styles.icon} />,
        description: "Mises à jour régulières et à la demande",
      },
      {
        name: "Hébergement",
        icon: <BiServer className={styles.icon} />,
        description: "Hébergement par mes soins",
      },
    ],
  },
];

function Services() {
  return (
    <section id="services">
      <SectionTitle title="Mes services 🤝🏻" />
      <div className={styles.container}>
        {services.map((service, index) => (
          <div key={index} className={styles.services}>
            <SubTitle title={service.name} />
            <ServiceCard features={service.features} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

function SubTitle({ title }) {
  return <h3 className={styles.subtitle}>{title}</h3>;
}

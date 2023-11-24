"use client";

import { useState } from "react";
import { m } from "framer-motion";
import Toggle from "./menu/Toggle";
import Items from "./menu/Items";
import styles from "./Menu.module.css";
import { LazyMotion } from "framer-motion";

const loadFeatures = () =>
  import("../animations/feature.js").then((res) => res.default);

const links = [
  {
    label: "À propos de moi 👨🏻‍💻",
    url: "#about",
    target: false,
  },
  {
    label: "Mes dernières créations 🧙🏻‍♂️",
    url: "#creations",
    target: false,
  },
  {
    label: "Témoignages 🙏🏻",
    url: "#testimonials",
    target: false,
  },
  {
    label: "Mes services 🤝🏻",
    url: "#services",
    target: false,
  },
  {
    label: "CV 📝",
    url: "https://flowcv.com/resume/o7asiufarb",
    target: true,
  },
];

const variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    x: 300,
    transition: {
      duration: 0.3,
    },
  },
};

function Menu() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Toggle bool={show} setFunction={() => setShow((show) => !show)} />
      <LazyMotion features={loadFeatures}>
        <m.nav
          initial="closed"
          className={styles.menu}
          animate={show ? "open" : "closed"}
          variants={variants}
        >
          <Items links={links} />
        </m.nav>
      </LazyMotion>
    </>
  );
}

export default Menu;

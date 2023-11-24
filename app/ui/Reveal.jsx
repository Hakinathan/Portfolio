"use client";
import { LazyMotion, m, useAnimation, useInView } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

import styles from "./Reveal.module.css";

const loadFeatures = () =>
  import("../animations/feature.js").then((res) => res.default);

function Reveal({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView, mainControls]);

  return (
    <LazyMotion features={loadFeatures}>
      <div className={styles.lg} ref={ref}>
        <m.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          {children}
        </m.div>
      </div>
    </LazyMotion>
  );
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Reveal;

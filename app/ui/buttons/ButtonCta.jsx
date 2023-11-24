import PropTypes from "prop-types";

import styles from "./ButtonCta.module.css";

function ButtonCta({ text, link }) {
  return (
    <a href={link} className={styles.cta}>
      {text}
    </a>
  );
}

ButtonCta.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ButtonCta;

import Hamburger from "hamburger-react";
import PropTypes from "prop-types";

import styles from "./Toggle.module.css";

function Toggle({ bool, setFunction }) {
  return (
    <div className={styles.toggle}>
      <Hamburger
        toggled={bool}
        toggle={setFunction}
        rounded
        label="Icône du menu"
        color="#fff"
        size={24}
      />
    </div>
  );
}

Toggle.propTypes = {
  bool: PropTypes.bool.isRequired,
  setFunction: PropTypes.func.isRequired,
};

export default Toggle;

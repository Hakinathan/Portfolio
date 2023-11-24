import PropTypes from "prop-types";

import styles from "./ServiceCard.module.css";

function ServiceCard({ features }) {
  return (
    <div className={styles.card}>
      <div className={styles.features}>
        {features.map((feature, index) => (
          <div className={styles.feature} key={index}>
            {feature.icon}
            <p className={styles.title}>{feature.name}</p>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  features: PropTypes.array.isRequired,
};

export default ServiceCard;

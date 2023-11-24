import { PropTypes } from "prop-types";
import styles from "./Testimonial.module.css";
import Image from "next/image";

function Testimonial({ onClick, current, feedback, index }) {
  return (
    <div
      className={`${styles.author} ${current === index ? styles.active : ""}`}
      key={index}
      onClick={() => onClick(index)}
    >
      <Image
        className={styles.image}
        src={feedback.image}
        alt={feedback.name}
        width={100}
        height={100}
        loading="lazy"
      />
      <h3 className={styles.name}>{feedback.name}</h3>
      <p className={styles.title}>{feedback.title}</p>
    </div>
  );
}

Testimonial.propTypes = {
  onClick: PropTypes.func.isRequired,
  current: PropTypes.number.isRequired,
  feedback: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Testimonial;

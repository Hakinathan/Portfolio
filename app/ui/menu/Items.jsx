import PropTypes from "prop-types";
import Item from "./Item";
import styles from "./Items.module.css";
import Link from "next/link";

function Items({ links }) {
  return (
    <ul className={styles.list}>
      {links.map((link, index) => (
        <Item link={link} index={index} key={index} />
      ))}
      <li>
        <Link href="mailto:contact.nathan.lemoine@pm.me" className={styles.btn}>
          Contactez-moi ✉
        </Link>
      </li>
    </ul>
  );
}

Items.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      target: PropTypes.bool,
    })
  ).isRequired,
};

export default Items;

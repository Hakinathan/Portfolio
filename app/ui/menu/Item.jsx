import { PropTypes } from "prop-types";
import { usePathname } from "next/navigation";
import styles from "./Item.module.css";

function Item({ link, index }) {
  const pathname = usePathname();

  return (
    <li key={index}>
      <a
        href={link.url}
        className={`${styles.link}`}
        {...(link.target && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {link.label}
      </a>
    </li>
  );
}

Item.propTypes = {
  link: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    target: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Item;

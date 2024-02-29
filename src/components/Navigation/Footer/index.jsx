import { Link } from "react-router-dom";
import styles from "./FooterNavigation.module.css";

const FooterNavigation = () => {
  return (
    <nav className={styles.footerNav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavigation;

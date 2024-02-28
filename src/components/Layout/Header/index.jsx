import HeaderNavigation from "/src/components/Navigation/Footer/index.jsx";
import styles from "./Header.module.css";
import logoColored from "../../../assets/logo/gadgetVaultLogo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={styles.contentWrap}>
        <Link to="/">
          <img src={logoColored} alt=" logo" className={styles.logo} />
        </Link>
        <HeaderNavigation />
      </div>
    </header>
  );
};

export default Header;

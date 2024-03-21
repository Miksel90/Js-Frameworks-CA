import styles from "./Footer.module.css";
import logo from "../..//logo/gadgetVaultLogo.webp";
import FooterNavigation from "/src/components/Navigation/Footer/index.jsx";
import ThemeButton from "../../ThemeButton/index.jsx";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className={styles.footerText}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.footerTextContainer}>
            <p>
              Welcome to GadgetVault, the ultimate destination for
              gadget-collecting individuals! We are a one-stop-shop for all your
              nerdy needs, offering a wide range of gadgets that are functional,
              stylish, and affordable.
            </p>
            <p>
              Thank you for choosing GadgetVault, and we hope you enjoy filling
              up your vault!
            </p>
          </div>
        </div>
        <div>
          <FooterNavigation />
        </div>
        <div className={styles.themeContainer}>
          <ThemeButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

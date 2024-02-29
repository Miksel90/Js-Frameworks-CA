import styles from "./Footer.module.css";
import logo from "../../../assets/logo/gadgetVaultLogo.webp";
import FooterNavigation from "/src/components/Navigation/Footer/index.jsx";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className={styles.footerText}>
          <img src={logo} alt="logo" />
          <p>
            Welcome to GadgetVault, the ultimate online shopping destination for
            fashion-conscious individuals! We are a one-stop-shop for all your
            fashion needs, offering a wide range of products that are trendy,
            stylish, and affordable.
          </p>
          <p>
            Thank you for choosing GadgetVault, and we hope you enjoy your
            shopping experience with us!
          </p>
        </div>
        <div>
          <h3>Quick links</h3>
          <FooterNavigation />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

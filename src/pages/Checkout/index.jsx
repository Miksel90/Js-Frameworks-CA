import styles from "./Checkout.module.css";
import checkoutImage from "../../assets/images/checkoutGoodbye.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function CheckoutPage() {
  return (
    <main className={styles.checkoutPage}>
      <Helmet>
        <title>Checkout | GadgetStore</title>
      </Helmet>

      <h2 className={styles.checkoutHeader}>Checkout</h2>
      <section className={styles.checkoutSection}>
        <p>Thanks for shopping with us!</p>
        <p>Your order is on its way.</p>
        <div className={styles.divider}></div>
        <Link to="/" className={`cta large ${styles.checkoutBack}`}>
          Back to shopping
        </Link>
      </section>
      <img
        src={checkoutImage}
        alt="Goodbye Robot"
        className={styles.productImageLarge}
      />
    </main>
  );
}

export default CheckoutPage;

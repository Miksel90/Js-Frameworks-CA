import styles from "./Home.module.css";
import Hero from "../../components/Hero";
import { Helmet } from "react-helmet";
import ProductList from "../../components/ProductList";

function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Home | GadgetVault</title>
      </Helmet>
      <Hero>
        <div className={styles.heroContent}>
          <h1>Welcome to GadgetVault</h1>
        </div>
      </Hero>
      <section className={styles.productSection}>
        <h2 className={styles.productHeader}>Products</h2>
        <div className={styles.productContainer}>
          <ProductList />
        </div>
      </section>
    </main>
  );
}

export default HomePage;

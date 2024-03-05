import { Helmet } from "react-helmet";
import styles from "./ProductPage.module.css";
import Product from "../../components/Product/index.jsx";

function ProductPage() {
  return (
    <main className={styles.ProductPage}>
      <Helmet>
        <title>Product | GadgetVault</title>
      </Helmet>
      <Product />
    </main>
  );
}

export default ProductPage;

import styles from "./CartIcon.module.css";
import { FaCartShopping } from "react-icons/fa6";

const CartIcon = ({ itemCount }) => {
  return (
    <div className={styles.cartIcon}>
      <FaCartShopping />
      {itemCount > 0 && <span className={styles.itemCount}>{itemCount}</span>}
    </div>
  );
};

export default CartIcon;

import styles from "./CartIcon.module.css";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const CartIcon = ({ itemCount }) => {
  return (
    <Link to={`/cart`}>
      <div className={styles.cartIcon}>
        <FaCartShopping />
        {itemCount > 0 && <span className={styles.itemCount}>{itemCount}</span>}
      </div>
    </Link>
  );
};

export default CartIcon;

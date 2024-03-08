import styles from "./CartIcon.module.css";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import useStore from "../../store/CartStore";

const CartIcon = () => {
  const cart = useStore((state) => state.cart);
  const itemCount = cart.reduce(
    (count, product) => count + (product.quantity || 1),
    0
  );

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

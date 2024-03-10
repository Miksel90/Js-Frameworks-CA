import useStore from "../../store/CartStore";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useStore((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
  }));

  // console.log(cart);

  const aggregatedProducts = cart.reduce((acc, product) => {
    const key = product.id;
    if (!acc[key]) {
      acc[key] = { ...product, quantity: 1 };
    } else {
      acc[key].quantity += 1;
    }
    return acc;
  }, {});

  const total = Object.values(aggregatedProducts).reduce(
    (acc, product) =>
      acc + product.quantity * (product.discountedPrice || product.price),
    0
  );

  const handleCheckout = () => {
    clearCart();
  };

  return (
    <main className={styles.cartPage}>
      <Helmet>
        <title>Cart | GadgetStore</title>
      </Helmet>
      <h2 className={styles.cartHeader}>Cart</h2>
      <section className={styles.productSection}>
        <ul>
          {Object.values(aggregatedProducts).map((product) => (
            <li key={product.id} className={styles.productItem}>
              <div className={styles.productItemImage}>
                {product.image && (
                  <img
                    src={product.image.url}
                    alt={product.image.alt || product.title}
                  />
                )}
              </div>
              <div className={styles.productItemDetails}>
                <h4>
                  {product.title} ({product.quantity})
                </h4>
                <p>${product.discountedPrice || product.price}</p>
                <button
                  className="cta"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.totalPriceContainer}>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="cta" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
      <div className={styles.cartFooter}>
        {cart.length > 0 && (
          <Link to="/checkout" className="cta large" onClick={handleCheckout}>
            Checkout
          </Link>
        )}
      </div>
    </main>
  );
}

export default CartPage;

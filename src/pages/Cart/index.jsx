import useStore from "../../store/CartStore";

function CartPage() {
  const cart = useStore((state) => state.cart);
  console.log(cart);

  const total = cart.reduce(
    (acc, product) => acc + (product.discountedPrice || product.price),
    0
  );

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.title} - ${product.discountedPrice || product.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
      <button>Checkout</button>
    </div>
  );
}

export default CartPage;

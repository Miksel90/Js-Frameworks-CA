import { create } from "zustand";

const addProductsToLocalStorage = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

const checkLocalStorageForProducts = () => {
  const storedProducts = localStorage.getItem("products");
  return storedProducts ? JSON.parse(storedProducts) : [];
};

const decreaseProductQuantity = (cart, productId) => {
  const productIndex = cart.findIndex((product) => product.id === productId);
  if (productIndex !== -1) {
    let newCart = [...cart];
    if (newCart[productIndex].quantity && newCart[productIndex].quantity > 1) {
      newCart[productIndex] = {
        ...newCart[productIndex],
        quantity: newCart[productIndex].quantity - 1,
      };
    } else {
      newCart.splice(productIndex, 1);
    }
    return newCart;
  }
  return cart;
};

const useStore = create((set) => ({
  cart: checkLocalStorageForProducts(),
  addToCart: (product) =>
    set((state) => {
      const newCart = [...state.cart, product];
      addProductsToLocalStorage(newCart);
      return { cart: newCart };
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const newCart = decreaseProductQuantity(state.cart, productId);
      addProductsToLocalStorage(newCart);
      return { cart: newCart };
    }),
  clearCart: () =>
    set(() => {
      addProductsToLocalStorage([]);
      return { cart: [] };
    }),
}));

export default useStore;

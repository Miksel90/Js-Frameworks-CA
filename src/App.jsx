import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/index.jsx";
import Home from "./pages/Home/index.jsx";
import ContactPage from "./pages/Contact/index.jsx";
import NotFound from "./pages/Error/index.jsx";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import { ThemeProvider } from "./hooks/createTheme.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </>
    </ThemeProvider>
  );
};
export default App;

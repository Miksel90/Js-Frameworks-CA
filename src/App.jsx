import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/index.jsx";
import Home from "./pages/Home/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import NotFound from "./pages/Error/index.jsx";
// import ProductPage from "./pages/Product";
// import CheckoutPage from "./pages/Checkout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="product/:id" element={<Product id />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;

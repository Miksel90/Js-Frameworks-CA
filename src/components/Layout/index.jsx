import Header from "../Navigation/Header/Header";
import Footer from "../Navigation/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div>
    <Header />
    <Outlet /> {/* This will render the component for the matching route */}
    <Footer />
  </div>
);

export default Layout;

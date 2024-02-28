import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div>
    <Header />
    <Outlet /> {/* This will render the component for the matching route */}
    <Footer />
  </div>
);

export default Layout;

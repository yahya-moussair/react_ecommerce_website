import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./layouts/navBar";
import Footer from "./layouts/footer";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import About from "./pages/about";
import DetailsProduct from "./pages/detailsProduct";
import Cart from "./pages/cart";

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<DetailsProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

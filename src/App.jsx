import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./layouts/navBar";
import Footer from "./layouts/footer";
import Shop from "./pages/shop";
import Contact from "./pages/contact";

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

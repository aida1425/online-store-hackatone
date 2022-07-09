import React from "react";
import { Route, Routes } from "react-router-dom";

import AddClothes from "./components/AddClothes/AddClothes";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import EditClothes from "./components/EditClothes/EditClothes";
import ClothesList from "./components/ClothesList/ClothesList";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/clothes" element={<ClothesList />} />
      <Route path="/add-clothes" element={<AddClothes />} />
      <Route path="/edit/:id" element={<EditClothes />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default Routing;

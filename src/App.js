import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import CartContextProvider from "./contexts/cartContext";

import ClothesContextProvider from "./contexts/clothesContext";
import Routing from "./Routing";
import "./App.css";

const App = () => {
  return (
    <CartContextProvider>
      <ClothesContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </ClothesContextProvider>
    </CartContextProvider>
  );
};

export default App;

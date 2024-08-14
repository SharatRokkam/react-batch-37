import React from "react";
// import "./App.css";
import ProductList from "./Components/Products/ProductList";
// Map

const App = () => {
  // const fruits = ["Kiwi", "Carrot", "Banana", "Mango", "Watermelon", "Grapes"];

  return (
    <>
      <div style={{display: "flex"}}>
        <ProductList />
      </div>
    </>
  );
};

export default App;

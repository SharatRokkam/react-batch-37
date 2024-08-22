// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./app.module.css";

// const App = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         console.log(response.data);
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }, []);
//   return (
//     <>
//       <h1>Product List </h1>
//       {products.map((product) => (
//         <div key={product.id} className={styles.container}>
//           <img src={product.image} alt={product.title} className={styles.img} />
//           <h4 className={styles.h4}>{product.title}</h4>
//           <p className={styles.p}>Price : {product.price}</p>
//           <p className={styles.p}>{product.description}</p>
//         </div>
//       ))}
//     </>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/error" element={<Error />}></Route>
      </Routes>
    </>
  );
};

export default App;

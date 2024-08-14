import React from "react";
import styles from "./products.module.css";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "iphone14",
      price: "63000",
      image:
        "https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      name: "samsung23",
      price: "234000",
      image:
        "https://image-us.samsung.com/SamsungUS/home/mobile/phones/mint/1_SDSAC-6420-PDP-SM-S711_GalaxyS23FE_Front_Mint-1600x1200.jpg?$product-details-jpg$",
    },
    {
      id: 3,
      name: "Nothing2",
      price: "23000",
      image:
        "https://i.gadgets360cdn.com/products/large/Phone-2a-DB-709x800-1709698950.jpg?downsize=*:360",
    },
    {
      id: 4,
      name: "OnePlus11R",
      price: "13000",
      image:
        " https://static0.xdaimages.com/wordpress/wp-content/uploads/2024/01/oneplus-12-product-feature.png",
    },
    {
      id: 5,
      name: "Pixel 8A",
      price: "63300",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/a/s/x/-original-imagtwh4snkqfdam.jpeg?q=90&crop=false",
    },
  ];

  return (
    <>
      <div>
        {products.map((product) => (
          <div className={styles.container} key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.img}
            />
            <h2 className={styles.heading}>{product.name}</h2>
            <p className={styles.para}>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;

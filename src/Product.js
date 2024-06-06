import React, { useEffect, useState } from "react";
import "./product.css";
function Product() {
  const url =
    "https://raw.githubusercontent.com/iffi96/Shoe-store-data-json/master/data004.json";
  const [value, setValue] = useState([]);
  function fetchinfo() {
    fetch(url)
      .then((res) => res.json())
      .then((resp) => {
        const shoeArray = Object.values(resp);
        setValue(shoeArray);
        console.log(shoeArray);
      });
  }
  useEffect(() => {
    fetchinfo();
  }, []);
  return (
    <div className="grid">
      {value.map((item) => (
        <div className="product_card">
          <img className="product_card-image" src={item.imageURL} alt="" />
          <div className="product_card-content">
            <p className="product_card-gender">{item.gender}</p>
            <h2 className="product_card-name">{item.name}</h2>
            <p className="product_card-price">${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;

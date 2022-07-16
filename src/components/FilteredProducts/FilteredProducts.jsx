import React, { useState } from "react";
import { ProductList } from "./ProductList";
import { productsList } from "./FilterProducts";
import "./ProductList.css";

const products = productsList();

export const FilteredProducts = () => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const FilteredProducts = (filterTerm) => {
    if (!filterTerm) {
      return products;
    }
    return products.filter((product) => product.includes(filterTerm));
  };

  const filteredProducts = FilteredProducts(value);
  return (
    <div>
      <div className="searchBox">
        <h2>Filter Products</h2>
        <input
          type="text"
          value={value}
          name="value"
          onChange={changeHandler}
          placeholder="Enter Filter Term"
        />
      </div>
      <div className="productsList">
        <ProductList List={filteredProducts} />
      </div>
    </div>
  );
};

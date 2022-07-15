import React from "react";
import "./ProductList.css";

export const ProductList = ({ List }) => {
  return (
    <div>
      <ul>
        {List.map((l, idx) => (
          <li key={idx} className="product">
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
};

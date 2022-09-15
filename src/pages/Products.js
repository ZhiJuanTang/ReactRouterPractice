import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <setion>
      <div>Products</div>
      <ul>
        <li>
          <Link to="/product-detail/p1">1</Link>
        </li>
        <li>
          <Link to="/product-detail/p2">2</Link>
        </li>
        <li>
          <Link to="/product-detail/p3">3</Link>
        </li>
      </ul>
    </setion>
  );
};

export default Products;

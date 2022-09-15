import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <setion>
      <div>Product Detail</div>
      <p>{params.productID}</p>      
    </setion>
  );
};

export default ProductDetail;

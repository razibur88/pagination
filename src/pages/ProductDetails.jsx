import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  let productId = useParams();

  let [singleProduct, setSingleProduct] = useState({});

  let getId = async () => {
    await axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingleProduct(response.data);
      });
  };

  useEffect(() => {
    getId();
  }, []);

  console.log(singleProduct);
  return (
    <>
      <div>ProductDetails</div>
    </>
  );
};

export default ProductDetails;

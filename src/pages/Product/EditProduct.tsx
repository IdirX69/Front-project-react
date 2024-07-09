import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const fetchOneProduct = async () => {
    const response = await fetch("http://localhost:5000/articles/" + id);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchOneProduct();
  }, []);
  console.log(product);

  return <div>edit page</div>;
};

export default EditProduct;

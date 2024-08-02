import React from "react";

const CartProduct = ({ products }) => {
  console.log(products);

  return (
    <div>
      <h3>Cart product</h3>
      {products.map((prod) => (
        <div>
          {prod.name}:{products.filter(({ id }) => id === prod.id).length}
        </div>
      ))}
    </div>
  );
};

export default CartProduct;

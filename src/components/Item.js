import React from "react";
import { useState } from "react";

function Item({ name, category }) {
const [ itemInCart, setItemInCart ] = useState(false)

function addItemToCart() {
  setItemInCart((itemInCart) => !itemInCart)
}
const itemClass = itemInCart ? "in-cart" : ""

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItemToCart}>{itemInCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;

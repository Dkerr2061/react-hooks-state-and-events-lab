import React from "react";
import { useState } from "react";

function Item({ name, category }) {
const [ itemInCart, setItemInCart ] = useState(false)

function addItemToCart() {
  setItemInCart((itemInCart) => !itemInCart)
}
const itemClass = itemInCart ? "in-cart" : ""
const buttonColor = itemInCart ? "remove" : "add" 

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonColor} onClick={addItemToCart}>{itemInCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;

import React, {useState} from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false)
  
  const itemClassName = addToCart ? "in-cart" : ""
  const btnLabel = addToCart ? "Remove From Cart" : "Add to Cart"
  const btnClassName = addToCart ? "remove" : "add"

  function handleClick () {
    setAddToCart((addToCart) => !addToCart)
  }

  return (
    <li className={itemClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={btnClassName}>{btnLabel}</button>
    </li>
  );
}

export default Item;

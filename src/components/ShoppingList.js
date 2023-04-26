import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [category, setCategory] = useState("All")
  function handleChange (e){
    setCategory(e.target.value)
  }
  const filteredItems = category === "All" ? items : items.filter(item => item.category === category)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={category} onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

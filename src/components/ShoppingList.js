import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [ selectedCategory, setSelectedCategory ] = useState(items)
  const [ filterBy, setFilterBy ] = useState('All')

  const selectItems = items.filter((item) => {
    if(filterBy === 'All') {
      return true
    } else {
      return item.category === filterBy
    }
  })

  function handleFilterChange(event) {
    setFilterBy(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

// components/ShoppingList.js
import React, { useState } from "react";
import Filter from "./Filter";

function ShoppingList({ items = [] }) {
  const [search, setSearch] = useState("");

  let filteredItems = [];

  if(items) {
    filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div>
      <Filter search={search} onSearchChange={setSearch} />
      <div className="Items">
        {filteredItems.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span> - <span>{item.category}</span> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;
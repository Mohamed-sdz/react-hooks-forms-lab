import React, { useState } from "react";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";
 
function App() {
  const [category, setCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  return (
    <div>
      <h1>Shopping App</h1>
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ShoppingList category={category} searchText={searchText} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import BakeryAdd from "./components/BakeryAdd";
import BakeryList from "./components/BakeryList";
import BakeryService from "./services/BakeryService";

const App = () => {
  const [bakeryItems, setBakeryItems] = useState(BakeryService.getBakeryItems());

  const handleAdd = () => {
    // Refresh the bakery items when a new item is added
    setBakeryItems(BakeryService.getBakeryItems());
  };

  const handleDelete = (id) => {
    BakeryService.deleteBakeryItem(id);
    setBakeryItems(BakeryService.getBakeryItems());
  };

  return (
    <div className="app">
      <h1>Bakery Management System</h1>
      <BakeryAdd onAdd={handleAdd} />
      <BakeryList bakeryItems={bakeryItems} onDelete={handleDelete} />
    </div>
  );
};

export default App;

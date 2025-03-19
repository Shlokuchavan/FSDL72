import React, { useState } from "react";
import BakeryService from "../services/BakeryService";

const BakeryAdd = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price && category && description) {
      const newItem = {
        id: Date.now(), // Unique ID based on timestamp
        name,
        price: parseFloat(price),
        category,
        description,
      };
      BakeryService.addBakeryItem(newItem); // Add the item to the service
      onAdd(); // Refresh the list of bakery items
      setName(""); // Clear the form
      setPrice("");
      setCategory("");
      setDescription("");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <h2>Add Bakery Item</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default BakeryAdd;

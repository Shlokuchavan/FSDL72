import React from "react";

const BakeryList = ({ bakeryItems, onDelete }) => {
  return (
    <div className="bakery-list">
      <h2>Bakery Items</h2>
      <ul>
        {bakeryItems.length > 0 ? (
          bakeryItems.map((item) => (
            <li key={item.id} className="bakery-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>
                <strong>Price:</strong> ${item.price}
              </p>
              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No bakery items available. Add some!</p>
        )}
      </ul>
    </div>
  );
};

export default BakeryList;

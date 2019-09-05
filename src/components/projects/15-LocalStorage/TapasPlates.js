import React, { useState } from "react";

const TapasPlates = () => {
  const [item, setItem] = useState("");

  const handleChange = e => {
    setItem(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(item);
    setItem("");
  };

  return (
    <>
      <ul className="plates">
        <li>Loading Tapas...</li>
      </ul>
      <form className="add-items" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="item"
          placeholder="Item Name"
          value={item}
          required
        />
        <input type="submit" value="+ Add Item" />
      </form>
    </>
  );
};

export default TapasPlates;

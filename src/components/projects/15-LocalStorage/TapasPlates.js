import React from "react";

const TapasPlates = () => {
  return (
    <>
      <ul class="plates">
        <li>Loading Tapas...</li>
      </ul>
      <form class="add-items">
        <input type="text" name="item" placeholder="Item Name" required />
        <input type="submit" value="+ Add Item" />
      </form>
    </>
  );
};

export default TapasPlates;

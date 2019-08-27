import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const App = () => {
  useEffect(() => {
    document.querySelector("html").classList = "";
  });
  return (
    <div className="App">
      <h1>React Javascript30 Projects</h1>
      <ul>
        <li>
          <Link to="/VideoApp">VideoApp</Link>
        </li>
        <li>
          <Link to="/Konami">Konami Code</Link>
        </li>
      </ul>
    </div>
  );
};

export default App;

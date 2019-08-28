import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const App = () => {
  useEffect(() => {
    document.title = "Javascript30 : React";
  }, []);
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
        <li>
          <Link to="/ScrollSlide">Slide on Scroll</Link>
        </li>
      </ul>
    </div>
  );
};

export default App;

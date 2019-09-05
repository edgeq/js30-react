import React from "react";
import LogoSVG from "./LogoSVG";
import TapasWrapper from "./TapasWrapper";

import "./style.css";

const App = () => {
  return (
    <div className="TapasApp">
      <LogoSVG />
      <TapasWrapper />
    </div>
  );
};

export default App;

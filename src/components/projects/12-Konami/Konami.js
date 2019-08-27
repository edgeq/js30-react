import React, { useEffect, useState } from "react";

const Konami = () => {
  const pressed = [];
  const secretCode = "edge";

  const [konami, setKonami] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", e => {
      pressed.push(e.key);
      console.log(pressed);
      pressed.splice(
        -secretCode.length - 1,
        pressed.length - secretCode.length
      );

      if (pressed.join("").includes(secretCode)) {
        console.log("DING DING YOU HACKED ME!!!");
        setKonami(true);
      }
    });
  });

  return <div>{konami ? <h1>HACKED!</h1> : <h1>Enter Secret Code</h1>}</div>;
};

export default Konami;

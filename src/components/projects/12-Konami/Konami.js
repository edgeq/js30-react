import React, { useEffect, useState } from "react";
// const cornify = require("cornified");

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
        // cornify.add();
        setKonami(true);
      }
    });
  });

  return (
    <div>
      {konami ? (
        <>
          <h1>HACKED!</h1>
          <img
            className="cornify"
            src="https://raw.github.com/akenn/cornify/master/images/rainbow/2.gif"
            alt="cornify"
          />
        </>
      ) : (
        <h1>Enter Secret Code</h1>
      )}
    </div>
  );
};

export default Konami;

import React, { useEffect, useState } from "react";
// const cornify = require("cornified");

const Konami = () => {
  const [konami, setKonami] = useState(false);

  useEffect(() => {
    const pressed = [];
    const secretCode = "edge";
    window.addEventListener("keyup", e => {
      pressed.push(e.key);
      console.log(pressed);
      pressed.splice(
        -secretCode.length - 1,
        pressed.length - secretCode.length
      );

      if (pressed.join("").includes(secretCode)) {
        setKonami(true);
        console.log("DING DING YOU HACKED ME!!!");
        // cornify.add();
      }
    });
    // [] tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run
  }, []);

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

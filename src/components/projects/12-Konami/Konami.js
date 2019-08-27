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
        console.log("DING DING YOU FOUND ME");
        setKonami(true);
      }
    });
  });

  return (
    <div>
      <h1>Open Conosle Log</h1>
      {konami ? <>HACKED!</> : null}
    </div>
  );
};

export default Konami;

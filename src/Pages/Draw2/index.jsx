import { Button, Center } from "@chakra-ui/react";

import React, { useState } from "react";
import Sketch from "react-p5";
import { useHistory } from "react-router-dom";
import "react-p5";
import "p5";

export const Draw2 = () => {
  const history = useHistory();
  const [sizeX, setSizeX] = useState("0");
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(1000, 900).parent(canvasParentRef);
  };

  let colorValue = 250;
  let colorValue1 = 250;
  let colorValue2 = 250;

  let sizex = 50;
  let sizey = 50;
  const handler = (e) => {
    console.log("teste");
  };

  let value = 0;

  const draw = (p5) => {
    if (p5.mouseIsPressed) {
      sizex = p5.mouseX / 2;
      sizey = p5.mouseY / 3;

      colorValue = p5.mouseX * 0.7;

      colorValue1 = p5.mouseY * 0.02;

      colorValue2 = p5.mouseY * 0.09;

      p5.fill(colorValue, colorValue1, colorValue2);
      p5.rect(p5.mouseX, p5.mouseY, sizex / 2, sizey / 2);
    } else {
      p5.fill(colorValue, colorValue1, colorValue2);
    }
  };

  return (
    <Center
      flexDirection={"column"}
      justifyContent={"center"}
      onKeyPress={(e) => handler()}
    >
      <Sketch setup={setup} draw={draw} />
      <Button onClick={() => history.push("/")}>go home, kid</Button>
      <p>laio vai toma no cu</p>
    </Center>
  );
};

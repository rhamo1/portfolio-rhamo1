import { Button, Center } from "@chakra-ui/react";

import React from "react";
import Sketch from "react-p5";
import { useHistory } from "react-router-dom";

export const Draw = () => {
  const history = useHistory();
  console.log(typeof h);
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
  const draw = (p5) => {
    if (p5.mouseIsPressed) {
      // color();
      sizex = p5.mouseX;
      sizey = p5.mouseY;

      colorValue = p5.mouseX * 0.5;

      colorValue1 = p5.mouseY * 0.02;

      colorValue2 = p5.mouseY * 0.09;

      p5.fill(colorValue, colorValue1, colorValue2);
    } else {
      p5.fill(colorValue, colorValue1, colorValue2);
    }

    p5.rect(p5.mouseX, p5.mouseY, sizex / 2, sizey / 2);
  };
  return (
    <Center flexDirection={"column"} justifyContent={"center"}>
      <Sketch setup={setup} draw={draw} />
      <Button onClick={() => history.push("/")}>go home, kid</Button>
    </Center>
  );
};

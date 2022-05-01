import { Button, Center } from "@chakra-ui/react";

import React from "react";
import Sketch from "react-p5";
import { useHistory } from "react-router-dom";
import image from "../../media/pics/globe.png";

let x = 50;
let y = 50;
const history = useHistory;

export const Draw = () => {
  console.log(typeof h);
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(1000, 800).parent(canvasParentRef);
    p5.loadImage(image, (img) => {
      p5.image(img, 700, 0);
      p5.image.resize(1000, 900);
    });
  };

  let sizex = 50;
  let sizey = 50;
  const draw = (p5) => {
    if (p5.mouseIsPressed) {
      p5.fill(image);
      sizex = p5.mouseX;
      sizey = p5.mouseY;
    } else {
      p5.fill(255);
    }
    p5.ellipse(p5.mouseX, p5.mouseY, sizex, sizey);
  };
  return (
    <Center flexDirection={"column"} justifyContent={"center"}>
      <Sketch setup={setup} draw={draw} />;
      <Button onClick={() => history.push("/")}>go home, kid</Button>
    </Center>
  );
};

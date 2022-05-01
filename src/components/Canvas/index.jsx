import React from "react";
import Sketch from "react-p5";

let x = 50;
let y = 50;

export const Canvas = () => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(900, 900).parent(canvasParentRef);
  };
  const draw = (p5) => {
    if (p5.mouseIsPressed) {
      p5.fill(250);
    } else {
      p5.fill(255);
    }
    p5.ellipse(p5.mouseX, p5.mouseY, 100, 80);
  };
  return <Sketch setup={setup} draw={draw} />;
};

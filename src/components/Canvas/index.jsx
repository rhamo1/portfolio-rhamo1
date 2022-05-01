import React from "react";
import Sketch from "react-p5";

export const Canvas = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 800).parent(canvasParentRef);
  };
  const draw = (p5) => {};
  return <Sketch setup={setup} draw={draw} />;
};

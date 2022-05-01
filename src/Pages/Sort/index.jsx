import React from "react";
import Sketch from "react-p5";
import image from "../../media/pics/globe.png";

export const Sort = () => {
  let sorted = "";

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 800).parent(canvasParentRef);
    p5.loadImage(image, (img) => {
      p5.image(img, 0, 0);
    });

    sorted = p5.loadImage(image);

    sorted.loadPixels();
    for (var i = 0; i < 1000; i++) {
      var record = -1;
      var selectedPixel = i;
      for (var j = i; j < 1000; j++) {
        var pix = sorted.pixels[j];
        // Sort by hue
        var b = p5.hue(pix);
        if (b > record) {
          selectedPixel = j;
          record = b;
        }
      }

      // Swap selectedPixel with i
      var temp = sorted.pixels[i];
      sorted.pixels[i] = sorted.pixels[selectedPixel];
      sorted.pixels[selectedPixel] = temp;
    }

    sorted.updatePixels();

    ///

    ///
  };
  const draw = (p5) => {
    image(sorted, 0, 0);
  };
  return <Sketch setup={setup} draw={draw} />;
};

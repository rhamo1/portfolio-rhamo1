import DOMPurify from "dompurify";

const rawHTML = `
<!DOCTYPE html><html lang="en"><head>
    <script src="p5.js"></script>
    <script src="p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8">

  </head>
  <body>
    <main>
    </main>
    <script src="sketch.js"></script>
    <p>teste</p>
  

</body></html>
`;

export const Canvas = () => {
  return <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>;
};

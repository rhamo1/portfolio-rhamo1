import { Center, Image, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import useSound from "use-sound";
import sound from "../../media/gospel.mp3";
// import lanssa from "../../media/cachorrada.mp3";
import img1 from "../../media/pics/1.png";
import img2 from "../../media/pics/2.png";
import img3 from "../../media/pics/3.png";
import img4 from "../../media/pics/4.jpg";
import img5 from "../../media/pics/5.png";
import img6 from "../../media/pics/6.png";
import img7 from "../../media/pics/7.png";
import img8 from "../../media/pics/8.png";
import img9 from "../../media/pics/9.png";
import img10 from "../../media/pics/10.png";
import gospel from "../../media/pics/gospel.png";
import gif from "../../media/gspl.gif";
import { useState } from "react";
import { links } from "../../media/media_queries";

export const Home = () => {
  const [play] = useSound(sound);
  const history = useHistory();
  const photos = links.length;
  let [imgCounter, setImgCounter] = useState(0);

  const nextImg = () => {
    if (imgCounter >= photos - 1) {
    } else {
      setImgCounter(imgCounter + 1);
    }
    console.log(imgCounter);
  };

  const prevImg = () => {
    console.log(links);
    if (imgCounter === 0) {
    } else {
      setImgCounter(imgCounter - 1);
    }
    console.log(`img${imgCounter}`);
  };
  return (
    <Center
      border={"14px"}
      borderColor="black"
      flexDirection={"column"}
      height="100%"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Image margin={"8px"} maxWidth={"30%"} src={gospel} />

      <Image margin={"3px"} marginBottom={"10px"} maxWidth={"60%"} src={gif} />
      <Stack>
        <Button
          padding={"10px"}
          variant={"BlockButton"}
          onClick={() => history.push("/fodase")}
        >
          margin={"20px"}
        </Button>
        <Button padding={"15px"} onClick={() => play(sound)}>
          gospel
        </Button>
        <Button padding={"15px"} onClick={() => history.push("/canvas")}>
          canvas
        </Button>
        <Button padding={"15px"} onClick={() => history.push("/radiogospel")}>
          radiogospel
        </Button>
      </Stack>

      <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <h3>® GOSPELDOWNLOADS 2022 ®</h3>
        {/* 
        <Image
          margin={"20px"}
          width={"300px"}
          height={"300px"}
          src={links[imgCounter]}
        /> */}
        <Image margin={"20px"} maxWidth={"60%"} src={img8} />
        {/* <Image margin={"20px"} maxWidth={"40%"} src={img1} />
        <h1>-/-/-/-</h1>
        <Image margin={"20px"} maxWidth={"40%"} src={img2} />
        <h1>-/-/-/-</h1>
        <Image margin={"20px"} maxWidth={"40%"} src={img6} />
        <h1>-/-/-/-</h1>
        <Image margin={"20px"} maxWidth={"40%"} src={img3} />
        <h1> -/-/-/-</h1>
        <Image margin={"20px"} maxWidth={"40%"} src={img4} />
        <h1> -/-/-/-</h1>
        <Image margin={"20px"} maxWidth={"40%"} src={img5} />
        <h1> -/-/-/-</h1>
        <Image margin={"20px"} maxWidth={"40%"} src={img7} />
        <h1>-/-/-/-</h1>
        <Image margin={"20px"} maxWidth={"40%"} src={img8} />
        <h1>-/-/-/-</h1>
        <Image margin={"20px"} maxWidth={"40%"} src={img9} />
        <h1>-/-/-/-</h1>
        <Image margin={"20px"} maxWidth={"40%"} src={img10} />
        <h1>-/-/-/-</h1> */}
        {/* <Stack flexDirection={"row"} alignItems="baseline">
          <Button
            padding={10}
            height="50px"
            width="50px"
            onClick={() => prevImg()}
          >
            -
          </Button>
          <Button
            padding={10}
            height="50px"
            width="50px"
            onClick={() => nextImg()}
          >
            +
          </Button>
        </Stack> */}
      </Stack>
    </Center>
  );
};

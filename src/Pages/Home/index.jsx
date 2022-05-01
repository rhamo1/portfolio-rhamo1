import { Center, Image, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import useSound from "use-sound";
import sound from "../../media/gospel.mp3";
// import lanssa from "../../media/cachorrada.mp3";
import img1 from "../../media/pics/red.png";
import img2 from "../../media/pics/globe.png";
import { Canvas } from "../../components/Canvas";

export const Home = () => {
  const [play] = useSound(sound);
  const history = useHistory();
  return (
    <Center
      border={"14px"}
      borderColor="black"
      flexDirection={"column"}
      height="100%"
      alignItems={"center"}
    >
      <Button
        padding={"10px"}
        variant={"BlockButton"}
        onClick={() => history.push("/fodase")}
      >
        margin={"20px"}
      </Button>
      <p>text</p>
      <Image
        margin={"20px"}
        maxWidth={"70%"}
        src="https://static.corinthians.com.br/uploads/1639404326db095bd14b838cbf3abf886f492c721b.jpg"
      />
      <Stack>
        <Button padding={"15px"} onClick={() => play(sound)}>
          gospel
        </Button>
        <Button padding={"15px"} onClick={() => history.push("/canvas")}>
          canvas
        </Button>
      </Stack>
      {/* <Canvas /> */}
      <h1>® GOSPELDOWNLOADS 2022 ®</h1>
      <Image margin={"20px"} maxWidth={"70%"} src={img1} />
      <h1>/</h1>
      <Image margin={"20px"} maxWidth={"70%"} src={img2} />
    </Center>
  );
};

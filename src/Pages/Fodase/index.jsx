import { Button, Center, Image } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import useSound from "use-sound";
import music from "../../media/06-Urban-Wax-Rollin-Intelligence.mp3";

export const Fodase = () => {
  const [play] = useSound(music);
  const history = useHistory();

  return (
    <Center flexDirection={"column"} alignItems="center" height={"100vh"}>
      <Button onClick={() => play()}>jungle</Button>
      <Image src="https://68.media.tumblr.com/9c482ecfcda309f629ac69168f2c22c2/tumblr_oh44bi2bp91vj2gx4o1_500.gif" />
      <Button onClick={() => history.push("/cachorro")}>fodase</Button>
    </Center>
  );
};

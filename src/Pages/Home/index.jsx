import { Center, Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useSound from "use-sound";
import sound from "../../media/gospel.mp3";
import lanssa from "../../media/cachorrada.mp3";

export const Home = () => {
  const [play] = useSound(sound);
  const history = useHistory();
  return (
    <Center flexDirection={"column"} height="100%" alignItems={"center"}>
      <h3>gospeldownloads</h3>
      <Button variant={"ButtonBlock"} onClick={() => history.push("/fodase")}>
        aaaaaaaaa
      </Button>
      <p>adasdasdas</p>
      <Image
        maxWidth={"70%"}
        src="https://static.corinthians.com.br/uploads/1639404326db095bd14b838cbf3abf886f492c721b.jpg"
      />
      <Button onClick={() => play(sound)}>gospel</Button>
      {/* <Button onClick={() => play(lanssa)}>cachorrada</Button> */}
    </Center>
  );
};

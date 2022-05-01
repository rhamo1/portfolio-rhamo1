import { Button, Center } from "@chakra-ui/react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Canvas } from "../../components/Canvas";

export const Draw = () => {
  const h = window.innerHeight;
  const w = window.innerWidth;
  console.log(h, w);
  const history = useHistory();

  return (
    <Center flexDirection={"column"} justifyContent={"center"}>
      <Canvas h={h} w={w} />
      <Button onClick={() => history.push("/")}>go home, kid</Button>
    </Center>
  );
};

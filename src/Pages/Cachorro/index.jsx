import { Button, Center, Image } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import dog from "../../media/cachorro.jpeg";

export const Cachorro = () => {
  const history = useHistory();
  return (
    <Center flexDirection={"column"} height="100vh">
      <Image src={dog} />
      <Button onClick={() => history.push("/canvas")}>fodase</Button>
    </Center>
  );
};

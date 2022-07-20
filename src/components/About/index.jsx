import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import rhamon from "../../media/rhamon.jpg";

export const About = ({ isMobile }) => {
  return (
    <Stack
      flexDirection={isMobile ? "column" : "row"}
      alignItems={isMobile ? "center" : "flex-start"}
      width={isMobile ? "80%" : "80%"}
      padding={"10px"}
      height={"90%"}
      //   margin={"10rem"}
    >
      <Image
        src={rhamon}
        padding={isMobile ? "10px" : "5px"}
        fit={"contain"}
        width={isMobile ? "60%" : "40%"}
      />
      <Stack alignItems={isMobile ? "center" : "flex-start"}>
        <Text width={"80%"} padding={"20px"}>
          <Heading padding={"10px"}>Sobre</Heading>
          Opa, beleza? Meu nome é Rhamon, atualmente resido em Curitiba, sou
          artista preto, desenvolvedor e apaixonado por bicicletas. Minha
          relação com a tecnologia vem desde pequeno, sempre procurei explorar
          as infinitas possibilidades e ferramentas disponíveis, principalmente
          na criação artística. Gosto da área porque além de possibilitar o
          constante crescimento e atualização e incentiva a curiosidade na
          comunicação e solução de problemas. Meu objetivo é aprofundar cada vez
          mais no desenvolvimento de soluções com criatividade e eficiência,
          aposto na minha facilidade em aprender e na boa comunicação.
        </Text>
      </Stack>
    </Stack>
  );
};

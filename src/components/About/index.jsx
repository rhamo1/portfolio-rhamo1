import { Button, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import rhamon from "../../media/rhamon.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const About = ({ isMobile }) => {
  return (
    <Stack
      flexDirection={isMobile ? "column" : "row"}
      alignItems={isMobile ? "center" : "center"}
      width={isMobile ? "100%" : "90%"}
      padding={"10px"}
      height={"90%"}
      //   margin={"10rem"}
    >
      <Image
        src={rhamon}
        padding={isMobile ? "2px" : "5px"}
        fit={"contain"}
        width={isMobile ? "80%" : "50%"}
      />
      <Stack alignItems={"center"}>
        <Text width={"95%"} padding={"20px"}>
          <Heading paddingBottom={"20px"}>sobre</Heading>
          Opa, beleza? Meu nome é Rhamon, tenho 24 anos e atualmente resido em
          Curitiba. Sou artista preto, desenvolvedor e apaixonado por
          bicicletas. Minha relação com a tecnologia vem desde pequeno, sempre
          procurei explorar as diversas possibilidades e ferramentas
          disponíveis, principalmente na criação artística. Gosto da área porque
          além de possibilitar o constante crescimento, pesquisa atualização
          quanto aos seus conteúdos e ferramentas, ela incentiva a curiosidade e
          princicpalmente a criatividade na comunicação e solução de problemas
          do cotidiano. Meu objetivo é aprofundar cada vez mais no
          desenvolvimento de soluções com criatividade e eficiência,e para isso
          aposto na minha facilidade em aprender, na boa comunicação e na
          constante vontade de absorver mais conhecimento.
        </Text>
        <HStack width={"100%"} justifyContent={"space-around"}>
          <Link>
            <AiFillGithub
              size={"5rem"}
              onClick={() => {
                window.open("https://github.com/rhamo1");
              }}
            />
          </Link>
          <Link>
            <AiFillLinkedin
              size={"5rem"}
              onClick={() => {
                window.open("https://www.linkedin.com/in/rhamondesouza/");
              }}
            />
          </Link>
        </HStack>
      </Stack>
    </Stack>
  );
};

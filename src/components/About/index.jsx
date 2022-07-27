import { Button, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import rhamon from "../../media/rhamon.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from "react-icons/ai";
import { saveAs } from "file-saver";

export const About = ({ isMobile }) => {
  const saveFile = () => {
    saveAs("/cv_rhamon_souza_fs.pdf", "cv-rhamon.pdf");
  };
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
            github
            <AiFillGithub
              size={"5rem"}
              onClick={() => {
                window.open("https://github.com/rhamo1");
              }}
            />
          </Link>
          <Link>
            linkedin
            <AiFillLinkedin
              size={"5rem"}
              onClick={() => {
                window.open("https://www.linkedin.com/in/rhamondesouza/");
              }}
            />
          </Link>
          <Link>
            currículo
            <AiFillFilePdf
              size={"5rem"}
              onClick={() => {
                window.open(
                  "https://docs.google.com/document/d/196GRU06L9ZgaO5jpLDe3JEXPaYUciXwpCo0adlbJz2E/edit?usp=sharing"
                );
              }}
            />
          </Link>
        </HStack>
      </Stack>
    </Stack>
  );
};

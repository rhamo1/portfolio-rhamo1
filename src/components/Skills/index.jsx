import {
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  ListItem,
  Progress,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiTypescript, SiPostgresql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import {
  FaReact,
  FaPython,
  FaNode,
  FaDocker,
  FaLinux,
  FaGit,
} from "react-icons/fa";
import certificado from "../../media/certificado-1.png";

export const Skills = ({ isMobile }) => {
  return (
    <Stack
      height={"90%"}
      flexDirection={"column"}
      alignItems={isMobile ? "center" : "stretch"}
      width={isMobile ? "95%" : "90%"}
      padding={"10px"}
      paddingTop="4rem"
      id="skills"
    >
      <Heading paddingBottom={"30px"}>stacks & soft skills</Heading>
      <Text>Abaixo algumas das tecnologias quais tenho prática:</Text>

      <Grid
        templateColumns={isMobile ? "repeat(1, 1fr" : "repeat(3, 1fr)"}
        gap={20}
        alignItems={"baseline"}
      >
        {/*  */}
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading size={"md"} padding={"1rem"}>
              JavaScript
            </Heading>
            <SiJavascript size={"5rem"} />
          </Stack>
        </GridItem>
        {/*  */}
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading size={"md"} padding={"1rem"}>
              TypeScript
            </Heading>
            <SiTypescript size={"5rem"} />
          </Stack>
        </GridItem>
        {/*  */}
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading size={"md"} padding={"1rem"}>
              React
            </Heading>
            <FaReact size={"5rem"} />
          </Stack>
        </GridItem>
        {/*  */}
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading size={"md"} padding={"1rem"}>
              Python
            </Heading>
            <FaPython size={"5rem"} />
          </Stack>
        </GridItem>
        {/*  */}
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading size={"md"} padding={"1rem"}>
              HTML5
            </Heading>
            <AiFillHtml5 size={"5rem"} />
          </Stack>
        </GridItem>
        {/*  */}
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading size={"md"} padding={"1rem"}>
              CSS3
            </Heading>
            <DiCss3 size={"5rem"} />
          </Stack>
        </GridItem>
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading size={"md"} padding={"1rem"}>
              NodeJS
            </Heading>
            <FaNode size={"5rem"} />
          </Stack>
        </GridItem>
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading size={"md"} padding={"1rem"}>
              Docker
            </Heading>
            <FaDocker size={"5rem"} />
          </Stack>
        </GridItem>
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading size={"md"} padding={"1rem"}>
              Postgres
            </Heading>
            <SiPostgresql size={"5rem"} />
          </Stack>
        </GridItem>
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading size={"md"} padding={"1rem"}>
              Linux
            </Heading>
            <FaLinux size={"5rem"} />
          </Stack>
        </GridItem>
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading size={"md"} padding={"1rem"}>
              Git
            </Heading>
            <FaGit size={"5rem"} />
          </Stack>
        </GridItem>
        <GridItem>
          <Stack alignItems={"center"}>
            <UnorderedList>
              <ListItem>Redux</ListItem>
              <ListItem>Flask</ListItem>
              <ListItem>Django</ListItem>
              <ListItem>SQL</ListItem>
              <ListItem>Scrum</ListItem>
              <ListItem>Kanban</ListItem>
            </UnorderedList>
          </Stack>
        </GridItem>
      </Grid>

      <Stack>
        <Heading paddingBottom={"30px"}>certificados</Heading>
        <Image src={certificado} />
      </Stack>
    </Stack>
  );
};

import {
  Grid,
  GridItem,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact, FaPython, FaNode } from "react-icons/fa";

export const Skills = (isMobile) => {
  return (
    <Stack
      height={"90%"}
      flexDirection={isMobile ? "column" : "row"}
      alignItems={isMobile ? "center" : "flex-start"}
      width={isMobile ? "80%" : "60%"}
      padding={"20px"}
      paddingTop="4rem"
      id="skills"
    >
      <Text width={"80%"} padding={"10px"}>
        <Heading paddingBottom={"30px"}>stacks & soft skills</Heading>
        Estas são algumas das tecnologias que uso no dia-a-dia:
      </Text>
      <Grid
        templateColumns={isMobile ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
        gap={5}
        flexDirection={"column"}
        alignItems={"baseline"}
      >
        {/*  */}
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading padding={"1rem"}>JavaScript</Heading>
            <SiJavascript size={"5rem"} />
            <Text padding={"1rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              ad nobis recusandae neque doloremque? Quam aperiam, consequuntur
              nihil error rerum quia cum commodi odit enim quidem quis
              voluptatibus molestias perferendis!
            </Text>
          </Stack>
        </GridItem>
        {/*  */}
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading padding={"1rem"}>Typescript</Heading>
            <SiTypescript size={"5rem"} />
            <Text padding={"1rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              ad nobis recusandae neque doloremque? Quam aperiam, consequuntur
              nihil error rerum quia cum commodi odit enim quidem quis
              voluptatibus molestias perferendis!
            </Text>
          </Stack>
        </GridItem>
        {/*  */}
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading padding={"1rem"}>React</Heading>
            <FaReact size={"5rem"} />
            <Text padding={"1rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              ad nobis recusandae neque doloremque? Quam aperiam, consequuntur
              nihil error rerum quia cum commodi odit enim quidem quis
              voluptatibus molestias perferendis!
            </Text>
          </Stack>
        </GridItem>
        {/*  */}
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading padding={"1rem"}>Python</Heading>
            <FaPython size={"5rem"} />
            <Text padding={"1rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              ad nobis recusandae neque doloremque? Quam aperiam, consequuntur
              nihil error rerum quia cum commodi odit enim quidem quis
              voluptatibus molestias perferendis!
            </Text>
          </Stack>
        </GridItem>
        {/*  */}
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading padding={"1rem"}>HTML5</Heading>
            <AiFillHtml5 size={"5rem"} />
            <Text padding={"1rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              ad nobis recusandae neque doloremque? Quam aperiam, consequuntur
              nihil error rerum quia cum commodi odit enim quidem quis
              voluptatibus molestias perferendis!
            </Text>
          </Stack>
        </GridItem>
        {/*  */}
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading padding={"1rem"}>CSS3</Heading>
            <DiCss3 size={"5rem"} />
            <Text padding={"1rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              ad nobis recusandae neque doloremque? Quam aperiam, consequuntur
              nihil error rerum quia cum commodi odit enim quidem quis
              voluptatibus molestias perferendis!
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading padding={"1rem"}>NodeJS</Heading>
            <FaNode size={"5rem"} />
            <Text padding={"1rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              ad nobis recusandae neque doloremque? Quam aperiam, consequuntur
              nihil error rerum quia cum commodi odit enim quidem quis
              voluptatibus molestias perferendis!
            </Text>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack alignItems={"center"}>
            <Heading padding={"1rem"}>Outras</Heading>

            <UnorderedList>
              <ListItem>Linux</ListItem>
              <ListItem>Git</ListItem>
              <ListItem>Redux</ListItem>
              <ListItem>Flask</ListItem>
              <ListItem>Jinja</ListItem>
              <ListItem>Django</ListItem>
              <ListItem>SQL</ListItem>
              <ListItem>PostgreSQL</ListItem>
              <ListItem>Scrum</ListItem>
              <ListItem>Kanban</ListItem>
            </UnorderedList>
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
};

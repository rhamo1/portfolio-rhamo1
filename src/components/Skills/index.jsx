import { Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
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
      padding={"10px"}
    >
      <Text width={"80%"} padding={"20px"}>
        <Heading padding={"10px"}>Habilidades & soft skills</Heading>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Necessitatibus, sed fugiat impedit temporibus mollitia, odio modi cumque
        autem, non culpa deleniti? Dolore, ea? Hic ipsum sit, mollitia officiis
        totam nam. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Ratione suscipit quisquam incidunt sed numquam quasi praesentium totam
        aliquid voluptatem ad ea perspiciatis, placeat nesciunt unde. Veniam
        perspiciatis cumque libero corrupti? HTML | CSS | JavaScript |
        Typescript | React | Redux; Python | Flask | Jinja | Django | Node; SQL
        | PostgreSQL | Scrum | Kanban;
      </Text>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={6}
        flexDirection={"row"}
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
      </Grid>
    </Stack>
  );
};

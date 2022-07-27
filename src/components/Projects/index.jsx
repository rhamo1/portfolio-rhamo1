import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoIosCodeWorking } from "react-icons/io";
import sk1 from "../../media/screenshots/sk1.png";
import mm1 from "../../media/screenshots/mm2.jpg";
import di1 from "../../media/screenshots/di1.png";

export const Projects = ({ isMobile }) => {
  return (
    <Stack
      flexDirection={isMobile ? "column" : "column"}
      alignItems={isMobile ? "center" : "center"}
      width={isMobile ? "95%" : "100%"}
      paddingTop={"100px"}
      id="projects"
    >
      <Text>
        <Heading paddingBottom={"30px"}>projetos</Heading>
        Aqui estão linkados alguns dos principais projetos que desenvolvi nos
        últimos meses:
      </Text>
      <Grid
        flexDir={"row"}
        templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
        gap={2}
        paddingBottom={"50px"}
        justifyItems={"center"}
      >
        <Flex
          border={"3px solid black"}
          w={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          Stack kenzie
          <Image src={sk1} height={"100%"} width={"60%"} padding={4} />
          <HStack>
            <Link href="https://stack-kenzie.vercel.app/" isExternal>
              <SiVercel size={"3rem"} />
            </Link>
            <Link
              href="https://github.com/rhamo1/stack-kenzie-rhamo1"
              isExternal
            >
              <FaGithub size={"3rem"} />
            </Link>
          </HStack>
        </Flex>
        <Flex
          border={"3px solid black"}
          w={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          Mini Market
          <Image src={mm1} height={"100%"} width={"60%"} padding={4} />
          <HStack>
            <Link
              href="https://mini-market-api.herokuapp.com/api/users"
              isExternal
            >
              <SiVercel size={"3rem"} />
            </Link>
            <Link
              href="https://github.com/rhamo1/MiniMarket-API-rhamo1"
              isExternal
            >
              <FaGithub size={"3rem"} />
            </Link>
          </HStack>
        </Flex>
        <Flex
          border={"3px solid black"}
          w={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          DoIt
          <Image src={di1} height={"100%"} width={"60%"} padding={4} />
          <HStack>
            <Link>
              <SiVercel size={"3rem"} />
            </Link>
            <Link>
              <FaGithub size={"3rem"} />
            </Link>
          </HStack>
        </Flex>

        <Flex
          border={"3px solid black"}
          w={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          Em produção...
          <IoIosCodeWorking size={"4rem"} />
          {/* <HStack>
            <Link>
              <SiVercel size={"3rem"} />
            </Link>
            <Link>
              <FaGithub size={"3rem"} />
            </Link>
          </HStack> */}
        </Flex>
      </Grid>
    </Stack>
  );
};

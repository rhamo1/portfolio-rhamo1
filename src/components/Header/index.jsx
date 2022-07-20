import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Fade,
  Flex,
  Heading,
  HStack,
  Link,
  ScaleFade,
  Slide,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";

export const Header = ({ inViewPort, isMobile }) => {
  console.log(inViewPort);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {isMobile ? (
        <>
          <Stack
            flexDirection={"row"}
            flexWrap={"wrap"}
            position="sticky"
            top="0px"
            height={"4rem"}
            alignContent={"space-around"}
            alignItems={"flex-end"}
            justifyContent={"space-around"}
            width={"100%"}
            fontSize={"1rem"}
            fontWeight={"extrabold"}
            borderBottom={"2px"}
            backdropFilter={"blur(9.7px)"}
          >
            <Text>RHAMON DE SOUZA</Text>
            <Link onClick={onOpen}>menu</Link>
            <Drawer
              placement={"top"}
              onClose={onClose}
              isOpen={isOpen}
              allowPinchZoom={false}
              blockScrollOnMount={false}
              backdropFilter={"blur(9.7px)"}
            >
              <DrawerOverlay />
              <DrawerContent
                height={"70%"}
                alignItems={"center"}
                transition=".3s ease"
              >
                <DrawerBody width={"50%"}>
                  <Stack
                    flexDirection={"column"}
                    height={"100%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Link variant={"header"} marginTop={"0px"}>
                      sobre
                    </Link>
                    <Link href="#skills" variant={"header"} marginTop={"0px"}>
                      habilidades
                    </Link>
                    <Link variant={"header"} marginTop={"0px"}>
                      projetos
                    </Link>
                    <Link variant={"header"} marginTop={"0px"}>
                      contato
                    </Link>
                    <Link
                      onClick={onClose}
                      bg={"gray3"}
                      variant={"header"}
                      marginTop={"0px"}
                      transition=".4s ease"
                    >
                      fechar
                    </Link>
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>

            {/*  */}
          </Stack>
        </>
      ) : (
        <Stack
          flexDirection={"row"}
          flexWrap={"wrap"}
          position="sticky"
          top="0px"
          height={"4rem"}
          alignContent={"space-around"}
          alignItems={"flex-end"}
          justifyContent={"space-around"}
          width={"100%"}
          fontSize={"1rem"}
          fontWeight={"extrabold"}
          borderBottom={"2px"}
          backdropFilter={"blur(9.7px)"}
        >
          <Text>RHAMON DE SOUZA</Text>

          <Link variant={"header"} marginTop={"0px"}>
            sobre
          </Link>
          <Link variant={"header"} marginTop={"0px"}>
            habilidades
          </Link>
          <Link variant={"header"} marginTop={"0px"}>
            projetos
          </Link>
          <Link variant={"header"} marginTop={"0px"}>
            contato
          </Link>
        </Stack>
      )}
    </>
  );
};

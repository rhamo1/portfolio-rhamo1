import {
  Box,
  Container,
  Image,
  SlideFade,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { About } from "../../components/About";
import { Header } from "../../components/Header";
import { Skills } from "../../components/Skills";

export const Home = () => {
  const ref = useRef(null);
  const [isMobile] = useMediaQuery("(max-width: 900px)");

  const { inViewPort } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <>
      <Header inViewPort={inViewPort} isMobile={isMobile} />
      <Stack display={"flex"} alignItems="center">
        <About isMobile={isMobile} />
        <Skills id={"skills"} isMobile={isMobile} />
      </Stack>
    </>
  );
};

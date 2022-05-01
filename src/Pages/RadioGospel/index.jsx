import { Button, Center, Image, Link, Stack, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import img1 from "./media/1.jpg";
import img2 from "./media/2.jpg";
import img3 from "./media/3.jpg";
import img4 from "./media/4.jpg";
import img5 from "./media/5.jpg";
import img6 from "./media/6.jpg";
import img7 from "./media/7.jpg";
import img8 from "./media/8.jpg";
import img9 from "./media/9.jpg";
import img10 from "./media/10.jpg";
import img11 from "./media/11.jpg";
import img12 from "./media/12.jpg";
import img13 from "./media/13.jpg";
import img14 from "./media/14.jpg";

export const RadioGospel = () => {
  const history = useHistory();
  return (
    <>
      <Center flexDir={"column"} o>
        <h2>radiogospel</h2>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<iframe style='border-radius:0px' src='https://open.spotify.com/embed/show/2qakvXV9owN0VPDSW8Rk84?utm_source=generator' width='400px' height='232' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' />",
          }}
        />
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Image src={img2} maxWidth={"70%"} maxHeight={"100%"} />
          <Image src={img3} maxWidth={"70%"} maxHeight={"100%"} />
          <Image src={img4} maxWidth={"70%"} maxHeight={"100%"} />
          <Image src={img1} maxWidth={"70%"} maxHeight={"100%"} />
          <Image src={img5} maxWidth={"70%"} maxHeight={"100%"} />
          <Image src={img6} maxWidth={"70%"} maxHeight={"100%"} />
          <Image src={img7} maxWidth={"70%"} maxHeight={"100%"} />
          <Image src={img8} maxWidth={"70%"} maxHeight={"100%"} />
          <Image src={img9} maxWidth={"70%"} maxHeight={"100%"} />
          <Image src={img10} maxWidth={"70%"} maxHeight={"100%"} />
          <Image src={img11} maxWidth={"70%"} maxHeight={"100%"} />
          <Image src={img12} maxWidth={"70%"} maxHeight={"100%"} />
          <Image src={img13} maxWidth={"70%"} maxHeight={"100%"} />
          <Image src={img14} maxWidth={"70%"} maxHeight={"100%"} />
          <Text>
            foto:{" "}
            <Link isExternal href="https://www.instagram.com/solmostarda/">
              solmostarda
            </Link>
          </Text>
          <Text>
            gospeldownloads: {""}
            <Link isExternal href="https://www.instagram.com/gospeldownloads">
              instagram
            </Link>
            {""} \\ {""}
            <Link isExternal href="https://soundcloud.com/gospel144">
              soundcloud
            </Link>
          </Text>
          <Text>
            prodfran:{" "}
            <Link isExternal href="https://www.instagram.com/prodfran/">
              instagram
            </Link>
            {""} \\ {""}
            <Link isExternal href="https://soundcloud.com/prodfran">
              soundcloud
            </Link>
          </Text>
          <Text>
            bxds:{" "}
            <Link isExternal href="https://www.instagram.com/bxds041/">
              instagram
            </Link>
            {""} \\ {""}
            <Link isExternal href="https://soundcloud.com/bxdstc">
              soundcloud
            </Link>
          </Text>
          <Button onClick={() => history.push("/")}>home</Button>
        </Stack>
      </Center>
    </>
  );
};

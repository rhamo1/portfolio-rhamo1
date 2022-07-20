import { Heading, Stack, Text } from "@chakra-ui/react";

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
        perspiciatis cumque libero corrupti?
      </Text>
    </Stack>
  );
};

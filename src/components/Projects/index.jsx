import { Heading, Stack, Text } from "@chakra-ui/react";

export const Projects = (isMobile) => {
  return (
    <Stack
      height={"90%"}
      flexDirection={isMobile ? "column" : "row"}
      alignItems={isMobile ? "center" : "flex-start"}
      width={isMobile ? "80%" : "60%"}
      padding={"10px"}
      id="projects"
    >
      <Text width={"80%"} padding={"20px"}>
        <Heading paddingBottom={"10px"}>projetos</Heading>
        Abaixo estão linkados alguns dos principais projetos que desenvolvi nos
        últimos meses:
      </Text>
    </Stack>
  );
};

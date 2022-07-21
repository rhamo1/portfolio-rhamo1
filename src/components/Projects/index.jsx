import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";

export const Projects = ({ isMobile }) => {
  return (
    <Stack
      flexDirection={isMobile ? "column" : "row"}
      alignItems={isMobile ? "center" : "flex-start"}
      width={isMobile ? "95%" : "90%"}
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
        gap={6}
        paddingBottom={"30px"}
      >
        <Box border={"3px solid black"} h={"20rem"} w={"20rem"}>
          Stack kenzie
        </Box>
        <Box border={"3px solid black"} h={"20rem"} w={"20rem"}>
          DoIt
        </Box>
        <Box border={"3px solid black"} h={"20rem"} w={"20rem"}>
          Mini Market
        </Box>
        <Box border={"3px solid black"} h={"20rem"} w={"20rem"}>
          ...
        </Box>
      </Grid>
    </Stack>
  );
};

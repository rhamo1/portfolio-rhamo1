import { blacken } from "@chakra-ui/theme-tools";

export const linkStyles = {
  variants: {
    header: {
      marginTop: "0px",
      _hover: {
        bg: blacken("gray1", 70),
        transform: "scale(2.02)",
        color: "gray1",
      },
    },
  },
};

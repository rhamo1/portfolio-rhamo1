import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/buttons.styles";
import { toastStyles as Toast } from "./components/toast.styles";
import { linkStyles as Link } from "./components/link.styles";

export const theme = extendTheme({
  colors: {
    primary: "#0001FF",
    red: "#E53E3E",
    green: "#48BB78",
    grayTag: "#A0AEC0",
    gray1: "#BCBBB7",
    gray2: "#060606",
    gray3: "#D4D2CE",
    gray4: "#5F5E5C",
    gray5: "#82817D",
  },

  components: {
    Button,
    Toast,
    Link,
  },

  fonts: {
    body: "JetBrains Mono, monospace",
    heading: "JetBrains Mono, monospace",
  },
});

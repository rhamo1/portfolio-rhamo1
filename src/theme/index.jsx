import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/buttons.styles";
import { toastStyles as Toast } from "./components/toast.styles";
import { linkStyles as Link } from "./components/link.styles";
import { progressStyles as Progress } from "./components/progress.style";

export const theme = extendTheme({
  colors: {
    primary: "#0001FF",
    red: "#E53E3E",
    green: "#48BB78",
    grayTag: "#A0AEC0",
    gray1: "#f8f9fa",
    gray2: "#e9ecef",
    gray3: "#dee2e6",
    gray4: "#ced4da",
    gray5: "#adb5bd",
    gray6: "#6c757d",
    gray7: "#495057",
    gray8: "#343a40",
    gray9: "#212529",
  },

  components: {
    Button,
    Toast,
    Link,
    Progress,
  },

  fonts: {
    body: "JetBrains Mono, monospace",
    heading: "JetBrains Mono, monospace",
  },
});

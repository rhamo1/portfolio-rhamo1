import { blacken } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  variants: {
    ButtonFilledBlue: {
      size: "lg",
      variant: "solid",
      bg: "primary",
      color: "white",
      width: "100%",
      margin: "auto",
      _hover: {
        bg: blacken("primary", 20),
        transform: "scale(1.02)",
      },

      BlockButton: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: "16px",
        letterSpacing: "2px",
        textDecoration: "none",
        textTransform: "uppercase",
        color: "primary",
        cursor: "pointer",
        border: "3px solid",
        padding: "0.25em 0.5em",
        boxShadow:
          "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px",
        position: "relative",
        userSelect: "none",
        _hover: {
          transform: "scale(1.02)",
          bg: "transparent",
          color: "gray.300",
          borderColor: "gray.300",
        },
        fontFamily: "Roboto, Inter, sans-serif",
      },
    },
  },
};

// .button-54 {
// fontFamily: "Open Sans", sans-serif;
// fontSize: 16px;
// letterSpacing: 2px;
// textDecoration: none;
// textTransform: uppercase;
// color: #000;
// cursor: pointer;
// border: 3px solid;
// padding: 0.25em 0.5em;
// box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
// position: relative;
// user-select: none;
// -webkit-user-select: none;
// touch-action: manipulation;
// }

// .button-54:active {
//   box-shadow: 0px 0px 0px 0px;
//   top: 5px;
//   left: 5px;
// }

// @media (min-width: 768px) {
//   .button-54 {
//     padding: 0.25em 0.75em;
//   }
// }

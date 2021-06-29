import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const styles = {
  global: (props) => ({
    "html, body": {
      // background: mode("gray.800", "whiteAlpha.900")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
    },
    a: {
      color: "teal.500",
    }
  })
}

export const theme = extendTheme({ colors, styles })
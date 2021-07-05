import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import "@fontsource/open-sans"
import "@fontsource/poppins"
import "@fontsource/titillium-web"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const fonts = {
  heading: "Titillium Web",
  // body: "Open Sans",
}

const styles = {
  global: (props) => ({
    "html, body": {
      // background: mode("gray.800", "whiteAlpha.900")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
      scroll: 'smooth', //arrumar
    },
    a: {
      color: "teal.500",
    }
  })
}

export const theme = extendTheme({ colors, styles, fonts })
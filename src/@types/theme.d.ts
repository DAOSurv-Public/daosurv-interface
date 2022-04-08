import { Theme as MaterialTheme } from "@mui/material"
import {
  AccentColors,
  CommonColors,
  ElementColors,
} from "@mui/material/styles/createPalette"

declare module "@emotion/react" {
  export interface Theme extends MaterialTheme {}
}

import type { Theme } from '@mui/material/styles'
import type { CSSProp } from 'styled-components'

declare module 'react' {
  interface Attributes {
    css?: CSSProp<Theme>
  }
}

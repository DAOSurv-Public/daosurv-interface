import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material"
import styled from "@emotion/styled"

interface ButtonProps extends MuiButtonProps {
  //width is pixel
  width?: number
}
export const DefaultButton = styled(MuiButton)<ButtonProps>`
  min-width: ${({ width }) => (width ? `${width}px` : "auto")};
`

export const DefaultOutlineButton = (props: ButtonProps) => {
  return <DefaultButton {...props} />
  // this line make text to uppercase
  // return <MuiButton variant="outlined" {...props} />
}

export const PrimaryButton = styled(DefaultButton)`
  color: white;
  border: none;
  background: #0f35ff;
  border-radius: 40px;
  padding: 12px 24px;
  min-width: ${({ width }) => (width ? `${width}px` : "auto")};
  box-shadow: none;
  :hover {
    background: #3F5DFF;
  }
`

export const OutLineTransparentButton = styled(DefaultOutlineButton)`
  color: white;
  border: 2px solid #2b2038;
  box-sizing: border-box;
  border-radius: 100px;
  padding: 8px;
  min-width: ${({ width }) => (width ? `${width}px` : "auto")};
`

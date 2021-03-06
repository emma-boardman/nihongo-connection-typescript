import styled, { css } from "styled-components"
import { breakpoint, setSpacing } from "../../styles/styleHelpers"

const MainStyles = css`
padding-top: ${setSpacing.base};
  margin-top: 65px;
  ${breakpoint.md`
  margin-top: 0;`}
`

export const StyledMain = styled.main`
 ${MainStyles};
`

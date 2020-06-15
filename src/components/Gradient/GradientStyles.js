import styled, { css } from "styled-components"
import { setSpacing, setBorder, breakpoint } from "../../styles/styleHelpers"

const GradientStyles = css`
  height: 100%;
  box-sizing: border-box;
  padding: ${setSpacing.tight};
  background: linear-gradient(
    to left,
    #434599,
    cyan,
    green,
    yellow,
    orange,
    #ed2530
  );
  border-radius: ${setBorder.borderRadius};
  ${breakpoint.sm`
  width: 50%;`}
`

export const StyledGradient = styled.div`
  ${GradientStyles};
`

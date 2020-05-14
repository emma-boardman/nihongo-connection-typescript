import { css } from "styled-components"
import { BodyTextStyles } from "../../typography/BodyText/BodyTextStyles"
import { ClassCardStyles } from "../ClassCard/ClassCardStyles"
import {
  setFlex,
  setFlexDirection,
  setFontSize,
  setSpacing,
} from "../../../styles/styleHelpers"

export const ReviewCardStyles = css`
  ${ClassCardStyles};
  ${BodyTextStyles};
  box-sizing: border-box;
  font-size: ${setFontSize.reduced};
  padding: ${setSpacing.xLoose}; 
  ${setFlex({ align: "flex-end" })};
  ${setFlexDirection({ direction: "column" })};
  a {
    color: inherit;
  }
  blockquote {
    flex: 1;
    text-align: center;
  }
`

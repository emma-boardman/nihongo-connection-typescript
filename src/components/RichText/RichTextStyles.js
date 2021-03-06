import styled, { css } from 'styled-components'
import { BodyTextStyles } from "../BodyText/BodyTextStyles"
import { setFont, breakpoint, setColor } from "../../styles/styleHelpers"
import starSVG from "../../../static/star.svg"

const RichTextWrapperStyles = css`
${BodyTextStyles};
max-width: 500px;
${props => props.isOnBrandBg && `color: ${setColor.brandMonochrome[0]}`};
`

const RichTextEmphasisStyles = css`
font-family: ${setFont.fontPrimaryMedium};
`

const RichTextStarredListStyles = css`
li {
    margin-top: 5%;
  margin-bottom: 1%;
  list-style: none;
  margin-left: 2%;
  font-size: 1rem;
  color: ${setColor.brandMonochrome[0]};
  &:before {
    content: "";
    background: url(${starSVG}) no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
    fill:  white;
    stroke: white;
    position: absolute;
    margin-left: -2rem;
  }
  ${breakpoint.xs`
  &:before {
    margin-left: -2.5rem;
  }`}
  ${breakpoint.sm`
  &:before {
    margin-left: -3rem;
  }`}
}`

export const StyledRichText = styled.div`
  ${RichTextWrapperStyles};
  ${props => props.emphasiseText && RichTextEmphasisStyles};
  ${props => props.starredList && RichTextStarredListStyles};
`

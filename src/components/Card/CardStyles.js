import styled, { css } from "styled-components"
import { setColor, setBorder, setSpacing, breakpoint } from "../../styles/styleHelpers"

const ColorCardStyles = css`
background-color: ${props => props.bgColor === "primary" ? setColor.brandPrimary[600] : props.bgColor === "primaryLight" ? setColor.brandPrimary[100] : props.bgColor === "secondary" ? setColor.brandSecondary[500] : props.bgColor === "white" ? setColor.brandMonochrome[0] : setColor.brandMonochrome[900]};
h2, h3 {
    color: ${props => props.bgColor === "primaryLight" ?  setColor.brandPrimary[800] : setColor.brandMonochrome[0]};
}
p, li, form{
    color: ${props => props.bgColor === "primaryLight" || props.bgColor === "white" ? setColor.brandPrimary[700] : setColor.brandMonochrome[0]};
}
h3 {
    margin-bottom: 0;
}

`

const BorderCardStyles = css`
border: 2px solid ${setColor.brandPrimary[700]};
border-color: ${props => props.border === "black" ? setColor.brandMonochrome[900] : setColor.brandPrimary[700]};

`

export const StyledCard = styled.div`
padding: ${props => props.noPadding ? 0 : setSpacing.loose};
border-radius: ${setBorder.borderRadius};
box-sizing: border-box;
h2, h3 {
    margin-top: 0;
    color: ${setColor.brandPrimary[700]};
}
ul, ol {
    padding-left: ${setSpacing.loose};
   
}
li {
        color: ${setColor.brandPrimary[800]};
        margin-bottom: ${setSpacing.base};
    }
${props => props.bgColor && ColorCardStyles};
${props => props.border && BorderCardStyles};
    ${breakpoint.sm`
    width: ${props => props.fullWidth ? '100%' : '70%'};
    margin-left: auto;
    margin-right: auto;`}
`

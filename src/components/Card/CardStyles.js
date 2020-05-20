import { css } from "styled-components"
import { setColor, setBorder, setSpacing, setFont } from "../../styles/styleHelpers"

export const CardStyles = css`
padding: ${setSpacing.loose};
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
`

export const ColorCardStyles = css`
background-color: ${props => props.bgColor === "primary" ? setColor.brandPrimary[600] : props.bgColor === "primaryLight" ? setColor.brandPrimary[100] : props.bgColor === "secondary" ? setColor.brandSecondary[500] : setColor.brandMonochrome[900]};
h2, h3 {
    color: ${props => props.bgColor === "primaryLight" ? setColor.brandPrimary[800] : setColor.brandMonochrome[0]};
}
p, li{
    color: ${props => props.bgColor === "primaryLight" ? setColor.brandPrimary[700] : setColor.brandMonochrome[0]};
}
h3 {
    margin-bottom: 0;
}

`

export const BorderCardStyles = css`
border: 6px solid ${setColor.brandPrimary[700]};
border-color: ${props => props.border === "black" ? setColor.brandMonochrome[900] : setColor.brandPrimary[700]};

`
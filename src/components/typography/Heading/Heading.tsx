import React from "react"
import styled from 'styled-components'
import { H1Styles } from "./HeadingStyles"

export interface HeadingProps {
  element?: "h1" | "h2" | "h3" | "h4"
  text: string
}

const Heading = ({ element = "h1", text }) => {
  return <HeadingWrapper as={element}>{text}</HeadingWrapper>
}

const HeadingWrapper = styled.div`
 ${props => props.as === "h1" && H1Styles};
`

export default Heading

import React from "react"
import styled from "styled-components"
import { PillStyles } from "./PillStyles"

export interface PillProps {
  name: string
  ariaPressed: boolean
}

const Pill = ({  text, onClick, ariaPressed = false }) => {
  return (
    <>
      <PillWrapper
        onClick={onClick}
        aria-pressed={ariaPressed}
        type="button"
      >
        {text}
      </PillWrapper>
    </>
  )
}

const PillWrapper = styled.button`
  ${PillStyles}
`

export default Pill
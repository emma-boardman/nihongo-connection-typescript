import React from "react"
import { StyledHero, StyledHeroContent, StyledHeroImage } from "./HeroStyles"
import Logo from "../../../static/logo.svg"
import VerticalSpacing from "../utilities/VerticalSpacing"

const Hero = ({ children }) => {
  return (
    <StyledHero>
      <VerticalSpacing
        size={{ _: "baseTight", sm: "xxLoose" }}
      ></VerticalSpacing>
      <StyledHeroImage>
        <img src={Logo}></img>
      </StyledHeroImage>
      <VerticalSpacing size={{ _: "loose", sm: "xxLoose" }}></VerticalSpacing>
      <StyledHeroContent>{children}</StyledHeroContent>
    </StyledHero>
  )
}

export default Hero

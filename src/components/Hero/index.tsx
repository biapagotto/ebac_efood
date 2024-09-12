import React from 'react'
import {
  HeroContainer,
  HeroImage,
  Overlay,
  HeroContent,
  Title,
  SubTitle
} from './styles'

interface HeroProps {
  titulo: string
  tipo: string
  capa: string
}

const Hero: React.FC<HeroProps> = ({ titulo, tipo, capa }) => (
  <HeroContainer>
    <HeroImage src={capa} alt="Hero" />
    <Overlay />
    <HeroContent>
      <Title>{titulo}</Title>
      <SubTitle>{tipo}</SubTitle>
    </HeroContent>
  </HeroContainer>
)

export default Hero

import React from 'react'
import {
  HeroContainer,
  HeroImage,
  Overlay,
  HeroContent,
  Title,
  SubTitle
} from './styles'
import macarrao from '../../assets/images/macarrao.png'

const Hero: React.FC = () => (
  <HeroContainer>
    <HeroImage src={macarrao} alt="Hero" />
    <Overlay />
    <HeroContent>
      <Title>Italiana</Title>
      <SubTitle>La Dolce Vita Trattoria</SubTitle>
    </HeroContent>
  </HeroContainer>
)

export default Hero

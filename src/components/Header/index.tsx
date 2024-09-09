import React from 'react'
import { Link } from 'react-router-dom'
import {
  HeaderContainer,
  BackgroundImage,
  CartText,
  Logo,
  RestaurantsText
} from './styles'
import Vector from '../../assets/images/Vector.png'
import LogoImage from '../../assets/images/logo.png'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <BackgroundImage src={Vector} alt="Background" />
      <RestaurantsText>Restaurantes</RestaurantsText>
      <Link to="/">
        <Logo src={LogoImage} alt="Logo" />
      </Link>
      <CartText>0 produto(s) no carrinho</CartText>
    </HeaderContainer>
  )
}

export default Header

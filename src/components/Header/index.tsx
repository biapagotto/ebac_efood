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

interface HeaderProps {
  onCartClick: () => void
  cartItemCount: number
}

const Header: React.FC<HeaderProps> = ({ onCartClick, cartItemCount }) => {
  return (
    <HeaderContainer>
      <BackgroundImage src={Vector} alt="Background" />
      <RestaurantsText>Restaurantes</RestaurantsText>
      <Link to="/">
        <Logo src={LogoImage} alt="Logo" />
      </Link>
      <CartText onClick={onCartClick}>
        {cartItemCount} produto(s) no carrinho
      </CartText>
    </HeaderContainer>
  )
}

export default Header

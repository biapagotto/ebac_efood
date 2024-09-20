import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 186px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  overflow: hidden;
  z-index: 1;
`

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  cursor: pointer;
  position: relative;
  z-index: 2;
`

export const RestaurantsText = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.coral};
  position: relative;
  text-decoration: none;
  z-index: 2;
`

export const CartText = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.coral};
  position: relative;
  z-index: 2;
`

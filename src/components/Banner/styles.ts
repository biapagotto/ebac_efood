import styled from 'styled-components'
import fundoImg from '../../assets/images/fundo.png'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(${fundoImg});
  background-size: cover;
  background-position: center;
  position: relative;
  gap: 20px;
  margin-bottom: 80px;
  z-index: 2;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`

export const Titulo = styled.h1`
  width: 539px;
  height: 84px;
  position: absolute;
  top: 236px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
  color: ${cores.coral};
`

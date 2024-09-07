import styled from 'styled-components'
import { cores } from '../../styles'

export const RestaurantsContainer = styled.section`
  background-color: ${cores.branco2};
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;
`

interface CardProps {
  isWhiteBackground: boolean
  size?: 'small' | 'large'
}

export const Card = styled.div<CardProps>`
  width: ${(props) => (props.size === 'small' ? '320px' : '472px')};
  height: ${(props) => (props.size === 'small' ? '338px' : '430px')};
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) =>
    props.isWhiteBackground
      ? cores.coral
      : props.size === 'large'
      ? cores.branca
      : cores.coral};
  padding: 8px;
  box-sizing: border-box;
`

export const Image = styled.img`
  width: 304px;
  height: 167px;
  margin-right: 24px;
  object-fit: cover;
  margin: 0;
  margin-bottom: 8px;
`

export const Titulo = styled.h2`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 900;
  line-height: 18.75px;
  text-align: left;
  color: ${cores.creme};
  margin-bottom: 6px;
`

export const Descricao = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: ${cores.creme};
  box-sizing: border-box;
  margin-bottom: 8px;
`

export const Button = styled.button`
  width: 304px;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  background: ${cores.creme};
  border: none;
  color: ${cores.coral};
  cursor: pointer;
`

export const ListThreeColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`

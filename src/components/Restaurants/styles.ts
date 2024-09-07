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
  border: 1px solid ${cores.coral};
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) =>
    props.isWhiteBackground
      ? cores.branca
      : props.size === 'small'
      ? cores.coral
      : cores.branca};
`

export const Image = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Titulo = styled.h2`
  position: absolute;
  left: 22px;
  top: 240px;
  font-size: 18px;
  font-weight: 700;
  color: ${cores.coral};
  margin: 0;
`

export const NotaEstrelaContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Nota = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 21.09px;
  color: ${cores.coral};
  margin-right: 8px;
`

export const EstrelaIcon = styled.img`
  width: 21px;
  height: 21px;
  vertical-align: middle;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  color: ${cores.coral};
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`

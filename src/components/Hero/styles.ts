import styled from 'styled-components'
import { cores } from '../../styles'

export const HeroContainer = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  top: 0;
  background: #00000080;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 42px;
`

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000080;
  z-index: 2;
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  color: ${cores.branca};
  margin-left: 170px;
`

export const Title = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
  text-align: left;
  color: #ffffff;
  margin-top: 30px;
`

export const SubTitle = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  text-align: left;
  color: #ffffff;
  margin-top: 148px;
  margin-bottom: 32px;
`

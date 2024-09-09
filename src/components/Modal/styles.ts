import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  background-color: ${cores.coral};
  padding: 20px;
  width: 1024px;
  height: 344px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CloseButton = styled.button`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${cores.branca};
  font-size: 16px;
  cursor: pointer;
`

export const ProductImage = styled.img`
  position: absolute;
  left: 32px;
  top: 32px;
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const ProductInfo = styled.div`
  margin-left: 326px;
  margin-top: 20px;

  h2 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    font-weight: 440;
    margin-top: 16px;
    margin-right: 32px;
    white-space: pre-line;
  }
`
export const ButtonContainer = styled.div`
  margin-top: 261px;
  position: absolute;
  margin-right: 120px;
`

import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`

export const ModalWrapper = styled.div`
  position: fixed;
  width: 400px;
  background-color: ${cores.coral};
  padding: 22px;
  z-index: 3;
  right: 0;
  height: 100%;
`

export const Heading = styled.header`
  width: 400px;
  height: 56px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.75px;
  color: ${cores.branco2};
  text-align: left;
}
`

export const Text = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 32px;
  color: ${cores.branco2};
`

export const Button = styled.button`
  width: 344px;
  height: 24px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`

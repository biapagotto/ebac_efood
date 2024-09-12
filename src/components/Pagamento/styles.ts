import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
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
  width: 360px;
  background: ${cores.coral};
  padding: 8px;
  position: fixed;
  right: 0;
  height: 100%;
`

export const Titulo = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  color: ${cores.branco2};
  margin-top: 32px;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.branco2};
  display: block;
  margin-top: 20px;
`

export const CaixaTexto = styled.input`
  width: 100%;
  height: 32px;
  margin-top: 8px;
  padding: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  color: ${cores.preto};
  background: ${cores.creme};
`

export const Button = styled.button<{
  width: string
  height: string
  backgroundColor: string
  color: string
  variant?: 'primary' | 'secondary'
}>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) =>
    props.variant === 'primary'
      ? props.backgroundColor || cores.coral
      : props.backgroundColor || cores.creme};
  color: ${(props) =>
    props.variant === 'primary'
      ? props.color || cores.branco2
      : props.color || cores.coral};
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
`

export const PaymentDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
  gap: 30px;
`

export const ExpiryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
  gap: 30px;
`

export const CaixaTextoMesVencimento = styled(CaixaTexto)`
  width: 155px;
`

export const CaixaTextoAnoVencimento = styled(CaixaTexto)`
  width: 155px;
`

export const CaixaTextoNumeroCartao = styled(CaixaTexto)`
  width: 228px;
`

export const CaixaTextoCVV = styled(CaixaTexto)`
  width: 87px;
`
export const MesDeVencimento = styled(CaixaTexto)`
  width: 155px;
`

export const AnoDeVencimento = styled(CaixaTexto)`
  width: 155px;
`

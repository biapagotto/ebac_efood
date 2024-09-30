import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background-color: ${cores.coral};
  z-index: 2;

  pointer-events: auto;
  &:focus,
  &:hover {
    pointer-events: all;
  }
`

export const ProdutoCard = styled.div`
  display: flex;
  align-items: center;
  width: 344px;
  height: 100px;
  margin: 8px;
  background-color: ${cores.creme};
  padding: 10px;
  position: relative;
  margin-bottom: 16px;
  margin-top: 16px;
`

export const ProdutoImagem = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const ProdutoInfo = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
`

export const ProdutoNome = styled.h3`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  color: ${cores.coral};
  text-align: left;
`

export const ProdutoPreco = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.coral};
  margin-top: 16px;
`

export const RemoverProduto = styled.button`
  position: absolute;
  top: 76px;
  right: 8px;
  width: 16px;
  height: 16px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
`

export const ValorTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 8px;
`

export const ValorTexto = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  color: ${cores.branca};
`

export const Valor = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  color: ${cores.branca};
`

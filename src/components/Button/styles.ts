import styled from 'styled-components'
import { cores } from '../../styles'

export const ButtonContainer = styled.button<{
  width?: string
  height?: string
  backgroundColor?: string
  color?: string
  marginLeft?: string
}>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: ${(props) => props.color || '#000'};
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => props.marginLeft || '0px'}; // Adicionado
`

export const ButtonLink = styled.a<{
  width?: string
  height?: string
  backgroundColor?: string
  color?: string
  marginLeft?: string
}>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: ${(props) => props.color || cores.coral};
  margin-left: ${(props) => props.marginLeft || '0px'}; // Adicionado
  border: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

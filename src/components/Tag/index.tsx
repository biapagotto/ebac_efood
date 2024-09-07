import styled from 'styled-components'
import { cores } from '../../styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

export const TagContainer = styled.div<Props>`
  background-color: ${cores.coral};
  color: ${cores.branca};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 12px;
  display: inline-block;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>

export default Tag

import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.creme};
  margin-top: 120px;
  text-align: center;
  padding: 40px;
`

export const Logo = styled.img`
  display: block;
  margin: 0 auto;
`

export const SocialMediaContainer = styled.div`
  margin-top: 32.5px;
  display: flex;
  justify-content: center;
  gap: 8px;
`

export const SocialMediaIcon = styled.img`
  width: 24px;
  height: 24px;
`

export const FooterText = styled.p`
  margin-top: 80px;
  font-family: Roboto, sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: center;
  color: ${cores.coral};
  white-space: pre-line;
`

export const FooterSection = styled.div`
  margin-bottom: 40px;
`

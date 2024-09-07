import {
  Container,
  FooterSection,
  Logo,
  SocialMediaContainer,
  SocialMediaIcon,
  FooterText
} from './styles'
import logo from '../../assets/images/logo.png'
import facebookIcon from '../../assets/images/facebook.svg'
import instagramIcon from '../../assets/images/instagram.svg'
import twitterIcon from '../../assets/images/twitter.svg'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <Logo src={logo} alt="efood logo" />
        <SocialMediaContainer>
          <SocialMediaIcon src={facebookIcon} alt="Facebook" />
          <SocialMediaIcon src={instagramIcon} alt="Instagram" />
          <SocialMediaIcon src={twitterIcon} alt="Twitter" />
        </SocialMediaContainer>
        <FooterText>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade {'\n'} dos produtos é toda do
          estabelecimento contratado.
        </FooterText>
      </FooterSection>
    </div>
  </Container>
)

export default Footer

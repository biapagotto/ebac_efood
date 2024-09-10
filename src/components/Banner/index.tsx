import { Imagem, Logo, Titulo } from './styles'
import logo from '../../assets/images/logo.svg'
import bannerImg from '../../assets/images/fundo.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Logo src={logo} alt="efood logo" />
    <div>
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </Imagem>
)

export default Banner

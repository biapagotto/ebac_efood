import React from 'react'
import {
  Card,
  Image,
  Infos,
  Titulo,
  Nota,
  NotaEstrelaContainer,
  EstrelaIcon,
  Descricao
} from './styles'
import EstrelaImage from '../../assets/images/estrela.svg'
import { ButtonLink } from '../Button'
import { cores } from '../../styles'
import Tag from '../Tag'

interface Props {
  titulo: string
  imageUrl: string
  description: string
  rating: string
  category?: string
  showHighlight?: boolean
  isWhiteBackground?: boolean
  size?: 'large' | 'small'
  menuitem: number
}

const Restaurant: React.FC<Props> = ({
  titulo,
  imageUrl,
  description,
  rating,
  category,
  showHighlight = false,
  isWhiteBackground = false,
  size = 'large',
  menuitem
}) => {
  console.log(menuitem)
  return (
    <Card isWhiteBackground={isWhiteBackground} size={size}>
      <Image src={imageUrl} />
      <Infos>
        {showHighlight && <Tag size="big">Destaque da semana</Tag>}
        {category && <Tag size="small">{category}</Tag>}
      </Infos>
      <div style={{ padding: size === 'small' ? '10px' : '15px' }}>
        <Titulo>{titulo}</Titulo>
        {rating !== undefined && rating !== null && (
          <NotaEstrelaContainer>
            <Nota>{rating}</Nota>
            <EstrelaIcon src={EstrelaImage} alt="Estrela" />
          </NotaEstrelaContainer>
        )}
        <Descricao>{description}</Descricao>
        <ButtonLink
          href={`/Cardapio/${menuitem}`}
          width={size === 'small' ? '70px' : '82px'}
          height={size === 'small' ? '20px' : '24px'}
          backgroundColor={cores.coral}
          color={cores.branca}
          marginLeft="8px"
        >
          Saiba mais
        </ButtonLink>
      </div>
    </Card>
  )
}

export default Restaurant

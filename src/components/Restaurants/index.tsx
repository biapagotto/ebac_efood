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
  name: string
  imageUrl: string
  description: string
  rating?: number
  category?: string
  showHighlight?: boolean
  isWhiteBackground?: boolean
  size?: 'large' | 'small'
}

const Restaurant: React.FC<Props> = ({
  name,
  imageUrl,
  description,
  rating,
  category,
  showHighlight = false,
  isWhiteBackground = false,
  size = 'large'
}) => {
  return (
    <Card isWhiteBackground={isWhiteBackground} size={size}>
      <Image src={imageUrl} alt={name} />
      <Infos>
        {showHighlight && <Tag size="big">Destaque da semana</Tag>}
        {category && <Tag size="small">{category}</Tag>}
      </Infos>
      <div style={{ padding: size === 'small' ? '10px' : '15px' }}>
        <Titulo>{name}</Titulo>
        {rating !== undefined && rating !== null && (
          <NotaEstrelaContainer>
            <Nota>{rating.toFixed(1)}</Nota>
            <EstrelaIcon src={EstrelaImage} alt="Estrela" />
          </NotaEstrelaContainer>
        )}
        <Descricao>{description}</Descricao>
        <ButtonLink
          href="/Categories"
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

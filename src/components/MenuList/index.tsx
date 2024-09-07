import React from 'react'
import {
  Card,
  Descricao,
  Titulo,
  Image,
  Button,
  ListThreeColumns,
  RestaurantsContainer
} from './styles'
import RestaurantModel from '../../models/Restaurant'

type Props = {
  title: string
  description: string
  items: RestaurantModel[]
  size?: 'small' | 'large'
}

const MenuList: React.FC<Props> = ({
  title,
  description,
  items,
  size = 'small'
}) => (
  <section>
    <h1>{title}</h1>
    <p>{description}</p>
    <RestaurantsContainer>
      <ListThreeColumns>
        {items.map((item) => (
          <Card key={item.id} isWhiteBackground={true} size={size}>
            <Image src={item.imageUrl} alt={item.name} />
            <Titulo>{item.name}</Titulo>
            <Descricao>{item.description}</Descricao>
            <Button>Adicionar ao carrinho</Button>
          </Card>
        ))}
      </ListThreeColumns>
    </RestaurantsContainer>
  </section>
)

export default MenuList

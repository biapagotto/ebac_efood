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

export type MenuItem = {
  foto: string
  preco: string
  id: number
  nome: string
  descricao: string
  porcao: string
}

type MenuListProps = {
  items: MenuItem[]
  size?: 'small' | 'large'
  onItemClick: (item: MenuItem) => void
}

const MenuList: React.FC<MenuListProps> = ({
  items = [],
  size = 'small',
  onItemClick
}) => (
  <section>
    <RestaurantsContainer>
      <ListThreeColumns>
        {items.length > 0 ? (
          items.map((item) => (
            <Card key={item.id} isWhiteBackground={true} size={size}>
              <Image src={item.foto} alt={item.nome} />
              <Titulo>{item.nome}</Titulo>
              <Descricao>{item.descricao}</Descricao>
              <Button onClick={() => onItemClick(item)}>Mais detalhes</Button>
            </Card>
          ))
        ) : (
          <p>Nenhum item encontrado</p>
        )}
      </ListThreeColumns>
    </RestaurantsContainer>
  </section>
)

export default MenuList

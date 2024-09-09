import React from 'react'
import Restaurant from '../Restaurants'
import { ListTwoColumns, ListThreeColumns } from '../RestaurantList/styles'
import { RestaurantsContainer } from '../Restaurants/styles'
import { Restaurants } from '../../pages/Home'

export type Props = {
  restaurants: Restaurants[]
  title: string
  background: string
  size?: 'large' | 'small'
  columns: 'two' | 'three'
}

const RestaurantList: React.FC<Props> = ({
  restaurants,
  title,
  background,
  columns,
  size
}) => {
  const List = columns === 'three' ? ListThreeColumns : ListTwoColumns

  return (
    <section style={{ background }}>
      <h1>{title}</h1>
      <RestaurantsContainer>
        <List>
          {restaurants.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              titulo={restaurant.titulo}
              description={restaurant.descricao}
              imageUrl={restaurant.capa}
              rating={restaurant.avaliacao ?? 0}
              category={restaurant.tipo ?? 'Unknown'}
              showHighlight={restaurant.destacado === 'true'}
              isWhiteBackground={true}
              size={size}
              menuitem={restaurant.id}
            />
          ))}
        </List>
      </RestaurantsContainer>
    </section>
  )
}
export default RestaurantList

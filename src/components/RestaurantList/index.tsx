import React from 'react'
import RestaurantModel from '../../models/Restaurant'
import Restaurant from '../Restaurants'
import { ListTwoColumns, ListThreeColumns } from '../RestaurantList/styles'
import { RestaurantsContainer } from '../Restaurants/styles'

type Props = {
  restaurants: RestaurantModel[]
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
              name={restaurant.name}
              description={restaurant.description}
              imageUrl={restaurant.imageUrl}
              rating={restaurant.rating ?? 0}
              category={restaurant.category ?? 'Unknown'}
              showHighlight={restaurant.highlight === 'true'}
              isWhiteBackground={true}
              size={size}
            />
          ))}
        </List>
      </RestaurantsContainer>
    </section>
  )
}

export default RestaurantList

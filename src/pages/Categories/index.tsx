import RestaurantModel from '../../models/Restaurant'
import pizza from '../../assets/images/pizza.png'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import MenuList from '../../components/MenuList'

const MenuItems: RestaurantModel[] = [
  {
    id: 1,
    name: 'Pizza Margherita',
    imageUrl: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    name: 'Pizza Margherita',
    imageUrl: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    name: 'Pizza Margherita',
    imageUrl: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    name: 'Pizza Margherita',
    imageUrl: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    name: 'Pizza Margherita',
    imageUrl: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    name: 'Pizza Margherita',
    imageUrl: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Categories = () => (
  <>
    <Header />
    <Hero />
    <MenuList
      title="Menu"
      description="Confira nosso delicioso menu!"
      items={MenuItems}
      size="small"
    />
  </>
)

export default Categories

import RestaurantList from '../../components/RestaurantList'
import pizza from '../../assets/images/macarrao.png'
import sushi from '../../assets/images/sushi.png'
import RestaurantModel from '../../models/Restaurant'
import Banner from '../../components/Banner'

const restaurantes: RestaurantModel[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    imageUrl: sushi,
    rating: 4.9,
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    highlight: 'Destaque da semana'
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    imageUrl: pizza,
    rating: 4.6,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    imageUrl: pizza,
    rating: 4.6,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    imageUrl: pizza,
    rating: 4.6,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    imageUrl: pizza,
    rating: 4.6,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    imageUrl: pizza,
    rating: 4.6,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <div>
    <Banner />
    <RestaurantList
      restaurants={restaurantes}
      background="white"
      title={''}
      columns={'two'}
    />
  </div>
)

export default Home

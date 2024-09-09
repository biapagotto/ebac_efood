import { useEffect, useState } from 'react'
import RestaurantList from '../../components/RestaurantList'
import Banner from '../../components/Banner'

export type Restaurants = {
  category: string
  nome: string
  id: number
  titulo: string
  destacado?: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
}

const Home = () => {
  const [Restaurants, setRestaurantes] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Banner />
      <RestaurantList
        restaurants={Restaurants}
        background="white"
        title={''}
        columns={'two'}
      />
    </>
  )
}

export default Home

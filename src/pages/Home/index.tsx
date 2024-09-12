import { useEffect, useState } from 'react'
import RestaurantList from '../../components/RestaurantList'
import Banner from '../../components/Banner'

export type Restaurant = {
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
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/restaurantes'
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setRestaurants(data)
      } catch (error) {
        console.error('Erro ao buscar restaurantes', error)
      }
    }

    fetchRestaurants()
  }, [])

  return (
    <>
      <Banner />
      <RestaurantList
        restaurants={restaurants}
        background="white"
        title=""
        columns="two"
      />
    </>
  )
}

export default Home

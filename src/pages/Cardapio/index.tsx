import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import MenuList, { MenuItem } from '../../components/MenuList'
import ModalCompra from '../../components/Modal'
import { useParams } from 'react-router-dom'

const Cardapio: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [restaurantInfo, setRestaurantInfo] = useState<{
    capa: string
    titulo: string
    tipo: string
  } | null>(null)

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        )
        const data = await response.json()
        setMenuItems(data.cardapio)
        setRestaurantInfo({
          capa: data.capa,
          titulo: data.titulo,
          tipo: data.tipo
        })
      } catch (error) {
        console.error('Erro ao buscar dados do restaurante:', error)
      }
    }

    fetchRestaurantData()
  }, [id])

  const handleOpenModal = (product: MenuItem) => {
    setSelectedProduct(product)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  return (
    <>
      <Header />
      {restaurantInfo && (
        <Hero
          titulo={restaurantInfo.titulo}
          tipo={restaurantInfo.tipo}
          capa={restaurantInfo.capa}
        />
      )}
      <MenuList items={menuItems} onItemClick={handleOpenModal} />
      {selectedProduct && (
        <ModalCompra onClose={handleCloseModal} produto={selectedProduct} />
      )}
    </>
  )
}

export default Cardapio

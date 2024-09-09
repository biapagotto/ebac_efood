import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import MenuList, { MenuItem } from '../../components/MenuList'
import ModalCompra from '../../components/Modal'
import { useParams } from 'react-router-dom'

const Cardapio = () => {
  const { id } = useParams<{ id: string }>()
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setMenuItems(res.cardapio)
      })
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
      <Hero />
      <MenuList items={menuItems} onItemClick={handleOpenModal} />
      {selectedProduct && (
        <ModalCompra onClose={handleCloseModal} produto={selectedProduct} />
      )}
    </>
  )
}

export default Cardapio

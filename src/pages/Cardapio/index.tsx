import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import MenuList, { MenuItem } from '../../components/MenuList'
import ModalCompra from '../../components/Modal'
import Carrinho from '../../components/Carrinho'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../Redux/store'
import { addToCart, removeFromCart } from '../../Redux/cartSlice'

const Cardapio: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [restaurantInfo, setRestaurantInfo] = useState<{
    capa: string
    titulo: string
    tipo: string
  } | null>(null)
  const [showCart, setShowCart] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const cartItems = useSelector((state: RootState) => state.cart.items)

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

  const handleAddToCart = (product: MenuItem) => {
    dispatch(addToCart(product))
    setSelectedProduct(null)
  }

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId))
  }

  const handleToggleCart = () => {
    setShowCart(!showCart)
  }

  const handleCloseCart = () => {
    setShowCart(false)
    navigate(`/Cardapio/${id}`)
  }

  const totalValue = cartItems.reduce(
    (total, item) => total + parseFloat(item.preco),
    0
  )

  return (
    <>
      <Header onCartClick={handleToggleCart} cartItemCount={cartItems.length} />
      {restaurantInfo && (
        <Hero
          titulo={restaurantInfo.titulo}
          tipo={restaurantInfo.tipo}
          capa={restaurantInfo.capa}
        />
      )}
      <MenuList items={menuItems} onItemClick={handleOpenModal} />
      {selectedProduct && (
        <ModalCompra
          onClose={handleCloseModal}
          produto={selectedProduct}
          onAddToCart={handleAddToCart}
        />
      )}
      {showCart && (
        <Carrinho
          produtos={cartItems}
          onRemoveItem={handleRemoveFromCart}
          totalValue={totalValue}
          onClose={handleCloseCart}
          restaurantId={id as string}
        />
      )}
    </>
  )
}

export default Cardapio

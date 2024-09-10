import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import MenuList, { MenuItem } from '../../components/MenuList'
import ModalCompra from '../../components/Modal'
import Carrinho from '../../components/Carrinho'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../Redux/store'
import { addToCart, removeFromCart } from '../../Redux/cartSlice'

const Cardapio = () => {
  const { id } = useParams<{ id: string }>()
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [showCart, setShowCart] = useState(false)

  const dispatch = useDispatch<AppDispatch>()
  const cartItems = useSelector((state: RootState) => state.cart.items)

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

  const totalValue = cartItems.reduce(
    (total, item) => total + parseFloat(item.preco),
    0
  )

  return (
    <>
      <Header onCartClick={handleToggleCart} cartItemCount={cartItems.length} />
      <Hero />
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
        />
      )}
    </>
  )
}

export default Cardapio

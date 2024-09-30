import React, { useState } from 'react'
import { MenuItem } from '../MenuList'
import {
  Wrapper,
  ProdutoCard,
  ProdutoImagem,
  ProdutoInfo,
  ProdutoNome,
  ProdutoPreco,
  ValorTotalContainer,
  ValorTexto,
  Valor,
  ModalOverlay,
  RemoverProduto
} from './styles'
import { cores } from '../../styles'
import LixeiraImage from '../../assets/images/lixeira.svg'
import Entrega from '../Entrega'
import Pagamento from '../Pagamento'
import { Button } from '../Button'
import { EntregaModalOverlay } from '../Entrega/styles'
import { PaymentModal } from '../Pagamento/styles'

interface CarrinhoProps {
  produtos: MenuItem[]
  onRemoveItem: (id: number) => void
  totalValue: number
  onClose: () => void
  restaurantId: string
}

const Carrinho: React.FC<CarrinhoProps> = ({
  produtos,
  onRemoveItem,
  totalValue,
  onClose
}) => {
  const [openShipping, setOpenShipping] = useState(false)
  const [openPayment, setOpenPayment] = useState(false)
  const [deliveryData, setDeliveryData] = useState<unknown>({})

  const openShippingModal = () => {
    setOpenShipping(true)
    setOpenPayment(false)
  }

  const closeShippingModal = () => setOpenShipping(false)

  const openPaymentModal = () => {
    setOpenPayment(true)
    setOpenShipping(false)
  }

  const closePaymentModal = () => setOpenPayment(false)

  const handleCloseModal = () => {
    setOpenShipping(false)
    setOpenPayment(false)
    onClose()
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal()
    }
  }

  const handleBackToCart = () => {
    setOpenShipping(false)
    setOpenPayment(false)
  }

  return (
    <>
      <EntregaModalOverlay isOpen={openShipping} onClick={handleOverlayClick}>
        <Entrega
          isOpen={openShipping}
          onClose={closeShippingModal}
          onDeliveryDataChange={(data) => {
            setDeliveryData(data)
            openPaymentModal()
          }}
          onBackToCart={handleBackToCart}
          openPaymentModal={openPaymentModal}
        />
      </EntregaModalOverlay>

      <PaymentModal isOpen={openPayment} onClick={handleOverlayClick}>
        <Pagamento
          isOpen={openPayment}
          onClose={closePaymentModal}
          deliveryData={deliveryData}
          produtos={produtos}
          totalValue={totalValue}
        />
      </PaymentModal>

      <ModalOverlay isOpen={true} onClick={handleOverlayClick}>
        <Wrapper>
          {produtos.map((produto) => (
            <ProdutoCard key={produto.id}>
              <ProdutoImagem src={produto.foto} alt={produto.nome} />
              <ProdutoInfo>
                <ProdutoNome>{produto.nome}</ProdutoNome>
                <ProdutoPreco>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(parseFloat(produto.preco))}
                </ProdutoPreco>
              </ProdutoInfo>
              <RemoverProduto onClick={() => onRemoveItem(produto.id)}>
                <img src={LixeiraImage} alt="Remover item" />
              </RemoverProduto>
            </ProdutoCard>
          ))}
          <ValorTotalContainer>
            <ValorTexto>Valor total:</ValorTexto>
            <Valor>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(totalValue)}
            </Valor>
          </ValorTotalContainer>
          <Button
            width="344px"
            height="24px"
            backgroundColor={cores.creme}
            color={cores.coral}
            marginTop="16px"
            marginLeft="8px"
            type="button"
            variant="secondary"
            onClick={openShippingModal}
          >
            Continuar com a entrega
          </Button>
        </Wrapper>
      </ModalOverlay>
    </>
  )
}

export default Carrinho

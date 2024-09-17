import React from 'react'
import { MenuItem } from '../MenuList'
import { Button } from '../Button'
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
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <Wrapper>
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id}>
            <ProdutoImagem src={produto.foto} alt={produto.nome} />
            <ProdutoInfo>
              <ProdutoNome>{produto.nome}</ProdutoNome>
              <ProdutoPreco>
                R$ {parseFloat(produto.preco).toFixed(2)}
              </ProdutoPreco>
            </ProdutoInfo>
            <RemoverProduto onClick={() => onRemoveItem(produto.id)}>
              <img src={LixeiraImage} alt="Remover item" />
            </RemoverProduto>
          </ProdutoCard>
        ))}
        <ValorTotalContainer>
          <ValorTexto>Valor total:</ValorTexto>
          <Valor>R$ {totalValue.toFixed(2)}</Valor>
        </ValorTotalContainer>
        <Button
          width="344px"
          height="24px"
          backgroundColor={cores.creme}
          color={cores.coral}
          onClick={() => console.log('Continuar com a entrega')}
        >
          Continuar com a entrega
        </Button>
      </Wrapper>
    </ModalOverlay>
  )
}

export default Carrinho

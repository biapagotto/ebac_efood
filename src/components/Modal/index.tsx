import { useEffect } from 'react'
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ProductImage,
  ProductInfo,
  ButtonContainer
} from './styles'
import { Button } from '../../components/Button'
import { cores } from '../../styles'

interface ModalProps {
  onClose: () => void
  produto: {
    nome: string
    foto: string
    descricao: string
    porcao: string
    preco: string
  }
}

const ModalCompra: React.FC<ModalProps> = ({ onClose, produto }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll')

    return () => document.body.classList.remove('no-scroll')
  }, [])

  const formatarPreco = (preco: string) => {
    const valorNumerico = parseFloat(preco)
    return valorNumerico.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ProductImage src={produto.foto} alt={produto.descricao} />
        <ProductInfo>
          <h1>{produto.nome}</h1>
          <p>{produto.descricao}</p>
          <p>{produto.porcao}</p>
        </ProductInfo>
        <ButtonContainer>
          <Button
            width="218px"
            height="24px"
            backgroundColor={cores.creme}
            color={cores.coral}
            onClick={() => console.log('Adicionar ao carrinho')}
          >
            Adicionar ao carrinho - {formatarPreco(produto.preco)}
          </Button>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  )
}

export default ModalCompra

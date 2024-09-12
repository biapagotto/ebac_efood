import React, { useState } from 'react'
import {
  ModalOverlay,
  ModalWrapper,
  Titulo,
  Label,
  CaixaTexto,
  NumbersContainer
} from './styles'
import { Button } from '../Button'
import { cores } from '../../styles'

interface DeliveryData {
  address: string
  city: string
  postalCode: string
}

interface EntregaProps {
  isOpen: boolean
  onClose: () => void
  onDeliveryDataChange: (data: DeliveryData) => void
  onBackToCart: () => void // Função para retornar ao carrinho
}

const Entrega: React.FC<EntregaProps> = ({
  isOpen,
  onClose,
  onDeliveryDataChange,
  onBackToCart
}) => {
  const [receiver, setReceiver] = useState('')
  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [cep, setCep] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const deliveryData: DeliveryData = {
      address: `${endereco}, ${numero} ${complemento}`,
      city: cidade,
      postalCode: cep
    }

    onDeliveryDataChange(deliveryData)
    onClose()
  }

  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalWrapper>
        <Titulo>Detalhes de Entrega</Titulo>
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="receiver">Quem irá receber</Label>
            <CaixaTexto
              id="receiver"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="endereco">Endereço</Label>
            <CaixaTexto
              id="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="cidade">Cidade</Label>
            <CaixaTexto
              id="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              required
            />
          </div>

          <NumbersContainer>
            <div>
              <Label htmlFor="cep">CEP</Label>
              <CaixaTexto
                id="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="numero">Número</Label>
              <CaixaTexto
                id="numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                required
              />
            </div>
          </NumbersContainer>

          <Label htmlFor="complemento">Complemento</Label>
          <CaixaTexto
            id="complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />

          <Button
            width="344px"
            height="24px"
            backgroundColor={cores.creme}
            color={cores.coral}
            marginTop="16px"
            type="submit"
            variant="primary"
          >
            Finalizar pagamento
          </Button>
          <Button
            width="344px"
            height="24px"
            backgroundColor={cores.creme}
            color={cores.coral}
            marginTop="8px"
            type="button"
            onClick={onBackToCart}
            variant="secondary"
          >
            Voltar para o carrinho
          </Button>
        </form>
      </ModalWrapper>
    </ModalOverlay>
  )
}

export default Entrega

import React, { useState } from 'react'
import Entrega from '../Entrega'
import Confirmacao from '../Confirmação'
import { cores } from '../../styles'
import {
  CaixaTexto,
  ExpiryContainer,
  Label,
  ModalOverlay,
  ModalWrapper,
  PaymentDetails,
  Titulo
} from './styles'
import { MenuItem } from '../MenuList'
import { Button } from '../Button'

interface PagamentoProps {
  isOpen: boolean
  onClose: () => void
  deliveryData: any
  produtos: MenuItem[]
  totalValue: number
}

const Pagamento: React.FC<PagamentoProps> = ({
  isOpen,
  onClose,
  deliveryData,
  produtos,
  totalValue
}) => {
  const [numeroCartao, setNumeroCartao] = useState('')
  const [nomeCartao, setNomeCartao] = useState('')
  const [validade, setValidade] = useState('')
  const [cvv, setCvv] = useState('')
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false)
  const [produtosConfirmados, setProdutosConfirmados] = useState<MenuItem[]>([])
  const [isEntregaOpen, setEntregaOpen] = useState(false)

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validatePaymentData()) return

    const paymentData = {
      payment: {
        card: {
          name: nomeCartao.trim(),
          number: numeroCartao.replace(/\s+/g, ''),
          code: parseInt(cvv, 10),
          expires: {
            month: parseInt(validade.split('/')[0], 10),
            year: parseInt(validade.split('/')[1], 10)
          }
        }
      },
      delivery: deliveryData,
      products: produtos
    }

    try {
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(paymentData)
        }
      )

      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.message || 'Erro ao processar o pagamento')
      }

      console.log('Pagamento realizado com sucesso:', responseData)

      setProdutosConfirmados(produtos)
      setConfirmationModalOpen(true)
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro no pagamento:', error)
        alert(`Falha ao processar o pagamento. Erro: ${error.message}`)
      } else {
        console.error('Erro desconhecido:', error)
        alert('Falha ao processar o pagamento. Erro desconhecido.')
      }
    }
  }

  const validatePaymentData = () => {
    if (!numeroCartao || !nomeCartao || !validade || !cvv) {
      alert('Todos os campos são obrigatórios.')
      return false
    }
    if (!/^\d{16}$/.test(numeroCartao)) {
      alert('Número do cartão deve ter 16 dígitos.')
      return false
    }
    if (!/^\d{3}$/.test(cvv)) {
      alert('CVV deve ter 3 dígitos.')
      return false
    }
    return true
  }

  const closePaymentModal = () => {
    onClose()
  }

  const closeConfirmationModal = () => {
    setConfirmationModalOpen(false)
    closePaymentModal()
  }

  const handleBackToDelivery = () => {
    setEntregaOpen(true)
  }

  return (
    <>
      {isEntregaOpen ? (
        <Entrega
          isOpen={isEntregaOpen}
          onClose={() => setEntregaOpen(false)}
          onDeliveryDataChange={(data) => {
            setEntregaOpen(false)
            deliveryData(data)
          }}
          onBackToCart={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      ) : (
        <ModalOverlay isOpen={isOpen}>
          <ModalWrapper>
            <Titulo>
              Pagamento - Valor a pagar{' '}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(totalValue)}
            </Titulo>
            <form onSubmit={handlePayment}>
              <div>
                <Label htmlFor="nomeCartao">Nome do Cartão</Label>
                <CaixaTexto
                  id="nomeCartao"
                  value={nomeCartao}
                  onChange={(e) => setNomeCartao(e.target.value)}
                  required
                />
              </div>
              <PaymentDetails>
                <div>
                  <Label htmlFor="numero-cartao">Número do Cartão</Label>
                  <CaixaTexto
                    id="numero-cartao"
                    type="text"
                    value={numeroCartao}
                    onChange={(e) => setNumeroCartao(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <CaixaTexto
                    id="cvv"
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
                </div>
              </PaymentDetails>

              <ExpiryContainer>
                <div>
                  <Label htmlFor="mes-vencimento">Mês de vencimento</Label>
                  <CaixaTexto
                    id="mes-vencimento"
                    type="text"
                    value={validade.split('/')[0]}
                    onChange={(e) =>
                      setValidade(e.target.value + '/' + validade.split('/')[1])
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="ano-vencimento">Ano de vencimento</Label>
                  <CaixaTexto
                    id="ano-vencimento"
                    type="text"
                    value={validade.split('/')[1]}
                    onChange={(e) =>
                      setValidade(validade.split('/')[0] + '/' + e.target.value)
                    }
                    required
                  />
                </div>
              </ExpiryContainer>

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
                onClick={handleBackToDelivery}
                variant="secondary"
              >
                Voltar para a edição de endereço
              </Button>
            </form>
          </ModalWrapper>
        </ModalOverlay>
      )}

      {isConfirmationModalOpen && (
        <Confirmacao
          onClose={closeConfirmationModal}
          produtos={produtosConfirmados}
        />
      )}
    </>
  )
}

export default Pagamento

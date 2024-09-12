import React from 'react'
import { ModalWrapper, Heading, Text, ModalOverlay } from './styles'
import { Button } from '../Button'
import { cores } from '../../styles'
import { MenuItem } from '../MenuList'

interface ConfirmacaoProps {
  onClose: () => void
  produtos: MenuItem[]
}

const Confirmacao: React.FC<ConfirmacaoProps> = ({ onClose, produtos }) => {
  const orderId = produtos.length > 0 ? produtos[0].id : 'N/A'

  return (
    <ModalOverlay>
      <ModalWrapper>
        <Heading>Pedido Realizado - {orderId}</Heading>
        <Text>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </Text>
        <Text>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </Text>
        <Text>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </Text>
        <Text>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </Text>
        <Button
          width="360px"
          height="24px"
          backgroundColor={cores.creme}
          color={cores.coral}
          marginTop="8px"
          type="button"
          onClick={onClose}
          variant="secondary"
        >
          Concluir
        </Button>
      </ModalWrapper>
    </ModalOverlay>
  )
}

export default Confirmacao

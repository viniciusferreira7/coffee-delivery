import { Description, OrderInfo, SuccessContainer, Title } from './styles'
import illustration from '../../assets/illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <Title>
        <h2>Uhu! Pedido confirmado</h2>
        <h4>Agora é só aguardar que logo o café chegará até você</h4>
      </Title>
      <OrderInfo>
        <Description>
          <div>
            <MapPin size={14} weight="fill" />
          </div>
          <p>
            Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre,
            RS
          </p>
        </Description>
        <Description>
          <div>
            <Timer size={14} weight="fill" />
          </div>
          <p> Previsão de entrega 20 min - 30 min </p>
        </Description>
        <Description>
          <div>
            <CurrencyDollar size={14} weight="fill" />
          </div>
          <p>Pagamento na entrega Cartão de Crédito</p>
        </Description>
      </OrderInfo>
      <img src={illustration} alt="" />
    </SuccessContainer>
  )
}

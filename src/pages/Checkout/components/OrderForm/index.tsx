import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import React from 'react'
import {
  ArticleContainer,
  FormContainer,
  InputGroup,
  OrderFormContainer,
  SectionFormContainer,
  SectionPaymentContainer,
} from './styles'

export default function OrderForm() {
  return (
    <OrderFormContainer>
      <SectionFormContainer>
        <h2>Complete seu pedido</h2>
        <FormContainer>
          <ArticleContainer>
            <MapPinLine size={22} weight="regular" color="#C47F17" />
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </ArticleContainer>
          <InputGroup>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="number" placeholder="Numero" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </InputGroup>
        </FormContainer>
      </SectionFormContainer>
      <SectionPaymentContainer>
        <ArticleContainer>
          <CurrencyDollar size={22} color="#8047F8" />
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </ArticleContainer>
      </SectionPaymentContainer>
    </OrderFormContainer>
  )
}

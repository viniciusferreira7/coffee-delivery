import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  CheckoutContainer,
  FormContainer,
  SectionFormContainer,
  SectionPaymentContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <SectionFormContainer>
        <h2>Complete seu pedido</h2>
        <article>
          <MapPinLine size={32} weight="regular" />
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </article>
        <FormContainer>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <div>
            <input type="number" placeholder="Numero" />
            <input type="text" placeholder="Complemento" />
          </div>
          <div>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </div>
        </FormContainer>
      </SectionFormContainer>
      <SectionPaymentContainer>
        <article>
          <CurrencyDollar size={22} />
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </article>
      </SectionPaymentContainer>
    </CheckoutContainer>
  )
}

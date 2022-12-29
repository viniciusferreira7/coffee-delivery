import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { useFormContext } from 'react-hook-form'

import {
  ArticleContainer,
  AddressCard,
  InputGroup,
  OrderFormContainer,
  PaymentCard,
  ButtonGroup,
  Button,
} from './styles'

export default function OrderForm() {
  const { register } = useFormContext()

  return (
    <OrderFormContainer>
      <h2>Complete seu pedido</h2>
      <AddressCard>
        <ArticleContainer>
          <MapPinLine size={22} weight="regular" color="#C47F17" />
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </ArticleContainer>
        <InputGroup>
          <label htmlFor="CEP">
            <input {...register('cep')} type="text" placeholder="CEP" />
          </label>
          <label htmlFor="Rua">
            <input {...register('rua')} type="text" placeholder="Rua" />
          </label>
          <label htmlFor="Numero">
            <input {...register('numero')} type="number" placeholder="Numero" />
          </label>
          <label htmlFor="Complemento">
            <span>Opcional</span>
            <input
              {...register('complemento')}
              type="text"
              placeholder="Complemento"
            />
          </label>
          <label htmlFor="Bairro">
            <input {...register('bairro')} type="text" placeholder="Bairro" />
          </label>
          <label htmlFor="Cidade">
            <input {...register('cidade')} type="text" placeholder="Cidade" />
          </label>
          <label htmlFor="UF">
            <input {...register('uf')} type="text" placeholder="UF" />
          </label>
        </InputGroup>
      </AddressCard>
      <PaymentCard>
        <ArticleContainer>
          <CurrencyDollar size={22} color="#8047F8" />
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </ArticleContainer>
        <ButtonGroup required>
          <Button value="crédito">
            <CreditCard size={16} weight="regular" />

            <p>Cartão de crédito</p>
          </Button>
          <Button value="débito">
            <Bank size={16} weight="regular" />

            <p>Cartão de debito</p>
          </Button>
          <Button value="dinheiro">
            <Money size={16} weight="regular" />

            <p>Dinheiro</p>
          </Button>
        </ButtonGroup>
      </PaymentCard>
    </OrderFormContainer>
  )
}

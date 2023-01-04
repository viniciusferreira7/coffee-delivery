import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { Controller, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import InputMask from 'react-input-mask'

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
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()

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
          <label htmlFor="cep">
            <Controller
              {...register('cep')}
              control={control}
              render={() => <InputMask mask="99999-999" placeholder="CEP" />}
            />
            <ErrorMessage
              name="cep"
              errors={errors}
              render={({ message }) => <span>{message}</span>}
            />
          </label>
          <label htmlFor="rua">
            <input {...register('rua')} type="text" placeholder="Rua" />
            <ErrorMessage
              name="rua"
              errors={errors}
              render={({ message }) => <span>{message}</span>}
            />
          </label>
          <label htmlFor="numero">
            <input {...register('numero')} type="text" placeholder="Numero" />
            <ErrorMessage
              name="numero"
              errors={errors}
              render={({ message }) => <span>{message}</span>}
            />
          </label>
          <label htmlFor="complemento">
            <span>Opcional</span>
            <input
              {...register('complemento')}
              type="text"
              placeholder="Complemento"
            />
            <ErrorMessage
              name="complemento"
              errors={errors}
              render={({ message }) => <span>{message}</span>}
            />
          </label>
          <label htmlFor="bairro">
            <input {...register('bairro')} type="text" placeholder="Bairro" />
            <ErrorMessage
              name="bairro"
              errors={errors}
              render={({ message }) => <span>{message}</span>}
            />
          </label>
          <label htmlFor="cidade">
            <input {...register('cidade')} type="text" placeholder="Cidade" />
            <ErrorMessage
              name="cidade"
              errors={errors}
              render={({ message }) => <span>{message}</span>}
            />
          </label>
          <label htmlFor="uf">
            <input {...register('uf')} type="text" placeholder="UF" />
            <ErrorMessage
              name="uf"
              errors={errors}
              render={({ message }) => <span>{message}</span>}
            />
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
        <ButtonGroup>
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

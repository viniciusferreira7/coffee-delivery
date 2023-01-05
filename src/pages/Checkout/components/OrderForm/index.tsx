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
              name="cep"
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputMask
                  mask="99999-999"
                  placeholder="CEP"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            <ErrorMessage
              name="cep"
              errors={errors}
              render={({ message }) => <span>{message}</span>}
            />
          </label>
          <label htmlFor="street">
            <input {...register('street')} type="text" placeholder="Rua" />
            <ErrorMessage
              name="street"
              errors={errors}
              render={({ message }) => <span>{message}</span>}
            />
          </label>
          <label htmlFor="number">
            <input {...register('number')} type="text" placeholder="Numero" />
            <ErrorMessage
              name="number"
              errors={errors}
              render={({ message }) => <span>{message}</span>}
            />
          </label>
          <label htmlFor="complement">
            <span>Opcional</span>
            <input
              {...register('complement')}
              type="text"
              placeholder="Complemento"
            />
            <ErrorMessage
              name="complement"
              errors={errors}
              render={({ message }) => <span>{message}</span>}
            />
          </label>
          <label htmlFor="district">
            <input {...register('district')} type="text" placeholder="Bairro" />
            <ErrorMessage
              name="district"
              errors={errors}
              render={({ message }) => <span>{message}</span>}
            />
          </label>
          <label htmlFor="city">
            <input {...register('city')} type="text" placeholder="Cidade" />
            <ErrorMessage
              name="city"
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
        <Controller
          control={control}
          name="payment"
          render={({ field: { onChange, value } }) => (
            <ButtonGroup onValueChange={onChange} value={value}>
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
          )}
        />
        <ErrorMessage
          name="payment"
          errors={errors}
          render={({ message }) => <span>{message}</span>}
        />
      </PaymentCard>
    </OrderFormContainer>
  )
}

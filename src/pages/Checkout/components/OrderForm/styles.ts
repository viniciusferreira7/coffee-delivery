import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const OrderFormContainer = styled.section`
  h2 {
    font-size: 1.125rem;
    margin-bottom: 0.93rem;
  }
`
export const ArticleContainer = styled.article`
  display: grid;
  grid-template-areas:
    'icon h3'
    'icon p';
  column-gap: 0.5rem;
  row-gap: 0.125rem;
  justify-content: left;

  margin-bottom: 2rem;

  svg {
    grid-area: icon;
  }

  h3 {
    grid-area: h3;

    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    grid-area: p;

    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const AddressCard = styled.div`
  max-width: 40rem;
  width: 100%;
  height: 23.25rem;
  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-card']};
`

export const InputGroup = styled.div`
  display: grid;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-template-areas:
    'cep cep cep'
    'rua rua rua'
    'numero complemento complemento'
    'bairro cidade uf';

  width: 100%;

  label {
    max-width: 12.5rem;
    width: 100%;

    input {
      width: 100%;
      height: 2.5rem;
      padding: 0.75rem;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme['base-button']};

      background: ${(props) => props.theme['base-input']};

      &:focus {
        transition: all 300ms ease-in-out;
        border-color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }

  label[for='CEP'] {
    grid-area: cep;
  }

  label[for='Rua'] {
    grid-area: rua;
    max-width: 35rem;
  }

  label[for='Numero'] {
    grid-area: numero;
  }

  label[for='Complemento'] {
    grid-area: complemento;
    max-width: 21.75rem;
    position: relative;

    span {
      position: absolute;
      right: 0.75rem;
      top: 0.81rem;

      font: italic 400 0.75rem 'Roboto';
      color: ${(props) => props.theme['base-label']};
    }
  }

  label[for='Bairro'] {
    grid-area: bairro;
  }

  label[for='Cidade'] {
    grid-area: cidade;
    max-width: 17.25rem;
  }

  label[for='UF'] {
    grid-area: uf;
    max-width: 3.75rem;
  }
`

export const PaymentCard = styled(AddressCard)`
  height: 12.93rem;
  margin-top: 0.75rem;
`
export const ButtonGroup = styled(RadioGroup.Root)`
  display: flex;
  gap: 0.75rem;
`

export const Button = styled(RadioGroup.Item)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  width: 11.16rem;
  height: 3.18rem;
  padding: 0 2%;

  background: ${(props) => props.theme['base-button']};
  border: 1px solid transparent;
  border-radius: 6px;

  cursor: pointer;

  &[data-state='unchecked']:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props) => props.theme['base-hover']};
  }

  &[data-state='checked'] {
    background: ${(props) => props.theme['purple-light']};
    border-color: ${(props) => props.theme.purple};
  }

  p {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

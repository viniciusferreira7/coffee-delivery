import styled from 'styled-components'

export const OrderFormContainer = styled.section``

export const SectionFormContainer = styled.section`
  h2 {
    font-size: 1.125rem;
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

export const FormContainer = styled.form`
  max-width: 40rem;
  width: 100%;
  height: 36.93rem;
  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-card']};
`

export const InputGroup = styled.div`
  display: grid;
  grid-template-areas:
    'cep'
    'rua'
    'numero complemento'
    'bairro cidade uf';

  width: 100%;

  input[placeholder='CEP'] {
    grid-area: cep;
  }

  input[placeholder='Rua'] {
    grid-area: rua;
  }

  input[placeholder='Numero'] {
    grid-area: numero;
  }

  input[placeholder='Complemento'] {
    grid-area: complemento;
  }

  input[placeholder='Bairro'] {
    grid-area: bairro;
  }

  input[placeholder='Cidade'] {
    grid-area: cidade;
  }

  input[placeholder='UF'] {
    grid-area: uf;
  }
`

export const SectionPaymentContainer = styled.section``

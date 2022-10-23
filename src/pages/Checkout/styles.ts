import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  max-width: 70rem;
  width: 100%;

  margin: auto;
`
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

export const SectionPaymentContainer = styled.section``

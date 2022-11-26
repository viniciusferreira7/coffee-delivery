import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;

  max-width: 70rem;
  width: 100%;

  margin: auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;

  max-width: 70rem;
  width: 100%;
  margin: auto;
  margin-top: 9rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 2%;
  }
`

export const EmptyCart = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 50rem;
  height: 20rem;
  margin: 0 auto;

  font-size: 1.5rem;
  color: ${(props) => props.theme['base-label']};

  svg {
    font-size: 2rem;
  }
`

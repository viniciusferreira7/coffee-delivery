import styled from 'styled-components'

export const SelectedCoffeesCardContainer = styled.div`
  h2 {
    font-size: 1.125rem;
    margin-bottom: 0.93rem;
  }
`
export const CardContainer = styled.div`
  max-width: 25rem;
  width: 100%;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 44px;
  border-top-right-radius: 44px;

  background-color: ${(props) => props.theme['base-card']};
`
export const CoffeeSelected = styled.div`
  img {
    grid-area: img;
  }

  h4 {
    grid-area: h4;
  }

  p {
    grid-area: price;
  }
`

export const Button = styled.button`
  grid-area: button;
`

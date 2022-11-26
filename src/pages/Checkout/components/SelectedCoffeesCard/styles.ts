import styled from 'styled-components'

export const SelectedCoffeesCardContainer = styled.div`
  h2 {
    font-size: 1.125rem;
    margin-bottom: 0.93rem;
  }
`
export const CardContainer = styled.div`
  max-width: 28rem;
  width: 100%;
  padding: 2.5rem;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 44px;
  border-top-right-radius: 44px;

  background-color: ${(props) => props.theme['base-card']};
`
export const CoffeeSelected = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-areas:
    'img h4 h4 price'
    'img counter button price';

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    grid-area: img;

    width: 4rem;
    height: 4rem;
    margin-right: 0.75rem;
  }

  h4 {
    grid-area: h4;
    font-weight: 400;
    line-height: 20.8px;
  }

  div {
    grid-area: counter;
  }

  p {
    grid-area: price;
    margin-left: 2.5rem;
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    p {
      margin-left: 1.5rem;
    }
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.43rem;
  grid-area: button;

  width: 5.68rem;
  height: 2.375rem;

  background: ${(props) => props.theme['base-button']};
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-subtitle']};
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    transition: all 300ms ease-in-out;
    background: ${(props) => props.theme['base-hover']};
    border-color: ${(props) => props.theme.purple};
  }
`

export const TotalItems = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;

    &:last-of-type {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  a {
    text-decoration: none;
  }
`

export const ConfirmOrderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 23rem;
  width: 100%;
  height: 2.875rem;
  margin-top: 1.5rem;

  background: ${(props) => props.theme.yellow};
  border: 1px solid transparent;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    transition: all 300ms ease-in-out;
    background: ${(props) => props.theme['yellow-dark']};
  }
`

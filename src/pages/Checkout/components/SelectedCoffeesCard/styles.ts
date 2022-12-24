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

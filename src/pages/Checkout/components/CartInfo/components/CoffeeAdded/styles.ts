import styled from 'styled-components'

export const CoffeeAddedContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-areas:
    'img h4 h4 price'
    'img button button price';

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
    grid-area: button;
  }

  p {
    grid-area: price;
    margin-left: 2.5rem;
    font-weight: 700;
  }

  & + & {
    padding-top: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    p {
      margin-left: 0.2rem;
      font-size: 0.8rem;
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

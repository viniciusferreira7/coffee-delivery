import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 16rem;
  height: 19.375rem;

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px;
  border-bottom-left-radius: 32px;
  border-top-right-radius: 32px;

  & > header {
    img {
      margin-top: -1.25rem;
    }

    h4 {
      width: 4.25rem;

      text-align: center;
      font-size: 0.625rem;
      text-transform: uppercase;
      color: ${(props) => props.theme['yellow-dark']};

      background-color: ${(props) => props.theme['yellow-light']};

      margin: auto;
      margin-top: 1rem;
      margin-bottom: 1.25rem;
    }
  }

  & > main {
    text-align: center;

    padding: 0 1.25rem;

    h2 {
      font-size: 1.25rem;
    }

    p {
      width: 13.5rem;

      color: ${(props) => props.theme['base-label']};
      font-size: 0.8875rem;

      padding: 0.5rem 0 2rem 0;
    }
  }
`
export const Buy = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.43rem;

  & > p {
    font-size: 0.875rem;

    strong {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 1.5rem;
    }
  }

  & > div {
    display: flex;
    gap: 0.5rem;

    & > button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 2.375rem;
      height: 2.375rem;

      border-radius: 6px;
      border: 0;

      background-color: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme['base-card']};

      cursor: pointer;

      &:hover {
        transition: all ease-in-out 300ms;

        background-color: ${(props) => props.theme.purple};
      }
    }
  }
`

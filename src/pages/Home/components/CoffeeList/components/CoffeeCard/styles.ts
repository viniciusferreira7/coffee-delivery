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
    text-align: center;

    img {
      margin: -1.25rem auto 0;
    }
  }

  & > main {
    text-align: center;

    h2 {
      font-size: 1.25rem;
    }

    p {
      width: 13.5rem;

      color: ${(props) => props.theme['base-label']};
      font-size: 0.875rem;

      margin: 0.5rem 0 2.06rem 0;
    }
  }
`

export const TagsCoffees = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;

  h4 {
    font-size: 0.625rem;
    text-align: center;
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};

    background-color: ${(props) => props.theme['yellow-light']};

    margin-top: 0.55rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
    border-radius: 100px;
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

      &:disabled {
        opacity: 0.2;
        cursor: not-allowed;
      }
    }
  }
`

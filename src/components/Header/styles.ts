import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;

  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 90rem;
  height: 6.5rem;

  padding: 0 10.5%;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;

      padding: 0.5rem;

      border-radius: 6px;
    }

    a:has(span) {
      gap: 0.25rem;

      color: ${(props) => props.theme['purple-dark']};
      text-decoration: none;

      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};

      &:hover {
        transition: all ease-in-out 300ms;

        background-color: ${(props) => props.theme['purple-dark']};
        color: ${(props) => props.theme['purple-light']};

        svg {
          color: ${(props) => props.theme.white};
        }
      }

      svg {
        color: ${(props) => props.theme.purple};
      }

      span {
        font-size: 0.875rem;
      }
    }

    a:not(:has(span)) {
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      &:hover {
        transition: all ease-in-out 300ms;

        background-color: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme['yellow-light']};
      }
    }
  }
`

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  background: rgba(250, 250, 250, 0.95);
  z-index: 10;

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
      position: relative;
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      &:hover {
        transition: all ease-in-out 300ms;

        background-color: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme['yellow-light']};
      }

      p {
        position: absolute;
        top: -10px;
        right: -10px;

        width: 1.25rem;
        height: 1.25rem;
        border-radius: 9999px;
        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.white};
        font-size: 0.75rem;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem 10.5%;
  }
`

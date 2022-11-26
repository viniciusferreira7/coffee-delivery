import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 4.5rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme['base-button']};

  border-radius: 6px;

  & > svg {
    cursor: pointer;

    color: ${(props) => props.theme.purple};

    transition: all ease-in-out 300ms;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  & > p {
  }
`

import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;

  width: 4.5rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme['base-button']};
`

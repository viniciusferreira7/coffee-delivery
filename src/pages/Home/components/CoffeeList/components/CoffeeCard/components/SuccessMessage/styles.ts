import { animated } from '@react-spring/web'
import styled from 'styled-components'

export const SuccessMessageContainer = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 20rem;
  padding: 1.5rem;
  border-radius: 12px;

  position: absolute;
  margin-top: 2rem;

  background: ${(props) => props.theme['yellow-dark']};

  p {
    color: ${(props) => props.theme.white};
    font-size: 1.125rem;
    text-transform: uppercase;
  }
`

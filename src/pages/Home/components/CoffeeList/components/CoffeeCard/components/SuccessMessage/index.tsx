import { SuccessMessageContainer } from './styles'

import { useSpring } from '@react-spring/web'

interface SuccessMessageProps {
  added: boolean
}

export function SuccessMessage({ added }: SuccessMessageProps) {
  const props = useSpring({
    opacity: added ? 0.6 : 0,
    maxWidth: added ? 500 : 0,
  })

  return (
    <SuccessMessageContainer style={props}>
      <p>Adicionado ao carrinho</p>
    </SuccessMessageContainer>
  )
}

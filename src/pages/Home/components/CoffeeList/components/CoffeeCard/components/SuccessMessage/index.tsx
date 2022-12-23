import { SuccessMessageContainer } from './styles'

import { useSpring } from '@react-spring/web'

interface SuccessMessageProps {
  buy: boolean
}

export function SuccessMessage({ buy }: SuccessMessageProps) {
  const props = useSpring({
    opacity: buy ? 0.6 : 0,
    maxWidth: buy ? 500 : 0,
  })

  return (
    <SuccessMessageContainer style={props}>
      <p>Adicionado ao carrinho</p>
    </SuccessMessageContainer>
  )
}

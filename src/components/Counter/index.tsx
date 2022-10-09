import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { CounterContainer } from './styles'

export function Counter() {
  const [count, setCount] = useState(1)

  function decreaseCount() {
    if (count <= 1) {
      setCount(0)
    } else {
      setCount((state) => state - 1)
    }
  }

  function increaseCount() {
    setCount((state) => state + 1)
  }

  return (
    <CounterContainer>
      <Minus size={10} weight="bold" onClick={decreaseCount} />
      <span>{count}</span>
      <Plus size={10} weight="bold" onClick={increaseCount} />
    </CounterContainer>
  )
}

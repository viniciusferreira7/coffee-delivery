import { Minus, Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CounterContainer } from './styles'

interface CounterProps {
  getTheAmountOfCoffees: (amount: number) => void
}

export function Counter({ getTheAmountOfCoffees }: CounterProps) {
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

  useEffect(() => {
    getTheAmountOfCoffees(count)
  }, [count, getTheAmountOfCoffees])

  return (
    <CounterContainer>
      <Minus size={10} weight="bold" onClick={decreaseCount} />
      <span>{count}</span>
      <Plus size={10} weight="bold" onClick={increaseCount} />
    </CounterContainer>
  )
}

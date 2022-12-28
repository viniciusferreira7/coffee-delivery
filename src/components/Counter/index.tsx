import { Minus, Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { CounterContainer } from './styles'

interface CounterProps {
  getTheAmountOfEachCoffees: (quantity: number) => void
  quantity: number
}

export function Counter({ getTheAmountOfEachCoffees, quantity }: CounterProps) {
  const [count, setCount] = useState(quantity)

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
    getTheAmountOfEachCoffees(count)
  }, [count, getTheAmountOfEachCoffees])

  return (
    <CounterContainer>
      <Minus size={10} weight="bold" onClick={decreaseCount} />
      <span>{count}</span>
      <Plus size={10} weight="bold" onClick={increaseCount} />
    </CounterContainer>
  )
}

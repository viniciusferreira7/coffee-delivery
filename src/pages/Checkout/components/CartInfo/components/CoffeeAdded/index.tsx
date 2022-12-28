import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Counter } from '../../../../../../components/Counter'
import { CoffeeContext } from '../../../../../../contexts/CoffeeContext'
import { Button, CoffeeAddedContainer } from './styles'

interface CoffeeSelectedProps {
  image: string
  name: string
  number: number
  quantity: number
}

export function CoffeeAdded({
  image,
  name,
  number,
  quantity,
}: CoffeeSelectedProps) {
  const { removeCoffee } = useContext(CoffeeContext)

  const [price, setPrice] = useState(number)

  function getTheAmountOfEachCoffees(amount: number) {
    setPrice(amount * (number / quantity))
  }

  function priceIsTrue(value: number) {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  function handleRemoveCoffee() {
    removeCoffee(name)
  }

  return (
    <CoffeeAddedContainer key={number}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <div>
        <Counter
          quantity={quantity}
          getTheAmountOfEachCoffees={getTheAmountOfEachCoffees}
        />
      </div>
      <Button onClick={handleRemoveCoffee} type="button" aria-label="remover">
        <Trash size={16} weight="regular" />
        <span>Remover</span>
      </Button>
      <p>{priceIsTrue(price)}</p>
    </CoffeeAddedContainer>
  )
}

import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Counter } from '../../../../../../components/Counter'
import { CoffeeContext } from '../../../../../../contexts/CoffeeContext'
import { Button, CoffeeSelectedContainer } from './styles'

interface CoffeeSelectedProps {
  image: string
  name: string
  number: number
  quantity: number
}

export function CoffeeSelected({
  image,
  name,
  number,
  quantity,
}: CoffeeSelectedProps) {
  const { removeCoffee } = useContext(CoffeeContext)

  const [price, setPrice] = useState(0)

  function getTheAmountOfCoffees(amount: number) {
    setPrice(amount * number)
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
    <CoffeeSelectedContainer key={number}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <div>
        <Counter
          quantity={quantity}
          getTheAmountOfCoffees={getTheAmountOfCoffees}
        />
      </div>
      <Button onClick={handleRemoveCoffee} type="button" aria-label="remover">
        <Trash size={16} weight="regular" />
        <span>Remover</span>
      </Button>
      <p>{priceIsTrue(price)}</p>
    </CoffeeSelectedContainer>
  )
}

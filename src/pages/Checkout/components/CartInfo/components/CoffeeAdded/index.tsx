import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../../../contexts/CoffeeContext'
import { Button, CoffeeAddedContainer } from './styles'

interface CoffeeSelectedProps {
  image: string
  name: string
  number: number
}

export function CoffeeAdded({ image, name, number }: CoffeeSelectedProps) {
  const { removeCoffee } = useContext(CoffeeContext)

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

      <Button onClick={handleRemoveCoffee} type="button" aria-label="remover">
        <Trash size={16} weight="regular" />
        <span>Remover</span>
      </Button>
      <p>{priceIsTrue(number)}</p>
    </CoffeeAddedContainer>
  )
}

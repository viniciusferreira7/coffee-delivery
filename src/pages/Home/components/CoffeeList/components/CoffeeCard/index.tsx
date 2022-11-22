import { Buy, CoffeeCardContainer, TagsCoffess } from './styles'

import { Counter } from '../../../../../../components/Counter'
import { ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'

interface CoffeeCardProps {
  image: string
  tag1: string
  tag2?: string
  tag3?: string
  name: string
  description: string
  number: number
}

export function CoffeeCard({
  image,
  tag1,
  tag2,
  tag3,
  name,
  description,
  number,
}: CoffeeCardProps) {
  const [price, setPrice] = useState(number)

  function getTheAmountOfCoffees(amount: number) {
    setPrice(amount * number)
  }

  return (
    <CoffeeCardContainer>
      <header>
        <img src={image} alt={`Xícara de café ${name}`} />
        <TagsCoffess>
          <h4>{tag1}</h4>
          {tag2 && <h4>{tag2}</h4>}
          {tag3 && <h4>{tag3}</h4>}
        </TagsCoffess>
      </header>
      <main>
        <h2>{name}</h2>
        <p>{description}</p>
      </main>
      <Buy>
        <p>
          R$ <strong>{price.toFixed(2)}</strong>
        </p>
        <div>
          <Counter getTheAmountOfCoffees={getTheAmountOfCoffees} />
          <button title="Comprar">
            <ShoppingCartSimple size={19} weight="fill" />
          </button>
        </div>
      </Buy>
    </CoffeeCardContainer>
  )
}

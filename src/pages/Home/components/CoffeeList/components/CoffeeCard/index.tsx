import { Buy, CoffeeCardContainer, TagsCoffess } from './styles'

import { Counter } from '../../../../../../components/Counter'
import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../../../../../contexts/CoffeeContext'

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
  const { coffeesState, addNewCoffee } = useContext(CoffeeContext)
  const [price, setPrice] = useState(number)

  function getTheAmountOfCoffees(amount: number) {
    setPrice(amount * number)
  }

  function handleAddNewCoffee() {
    const newCoffee = {
      image,
      tag1,
      tag2,
      tag3,
      name,
      description,
      number: price,
    }

    // coffeesState.coffees.forEach((coffee) => {
    //   if (coffee.name !== newCoffee.name) {
    //     addNewCoffee(newCoffee)
    //   }

    //   return coffee
    // })

    addNewCoffee(newCoffee)
  }

  useEffect(() => {
    console.log(coffeesState)
  })

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
          <button onClick={handleAddNewCoffee} title="Comprar">
            <ShoppingCartSimple size={19} weight="fill" />
          </button>
        </div>
      </Buy>
    </CoffeeCardContainer>
  )
}

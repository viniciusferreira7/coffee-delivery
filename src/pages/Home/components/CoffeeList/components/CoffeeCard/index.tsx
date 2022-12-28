import { Buy, CoffeeCardContainer, TagsCoffees } from './styles'

import { Counter } from '../../../../../../components/Counter'

import { ShoppingCartSimple } from 'phosphor-react'

import { useContext, useEffect, useMemo, useState } from 'react'
import { CoffeeContext } from '../../../../../../contexts/CoffeeContext'
import { SuccessMessage } from './components/SuccessMessage'

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
  const [disabled, setDisabled] = useState(false)
  const [quantity, setQuantity] = useState(1)

  function handleAddNewCoffee() {
    const newCoffee = {
      image,
      tag1,
      tag2,
      tag3,
      name,
      description,
      number: price,
      quantity,
      added: true,
    }

    addNewCoffee(newCoffee)
  }

  const currentCoffee = coffeesState.coffees.find(
    (coffee) => coffee.name === name,
  )

  const currentCafeInformation = useMemo(
    () => ({
      added: currentCoffee ? currentCoffee.added : false,
      quantity: currentCoffee ? currentCoffee.quantity : 1,
    }),
    [currentCoffee],
  )

  function getTheAmountOfEachCoffees(amount: number) {
    setPrice(amount * number)
    setQuantity(amount)
  }

  useEffect(() => {
    if (price <= 0 || currentCafeInformation.added) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [price, currentCafeInformation])

  return (
    <CoffeeCardContainer>
      <SuccessMessage added={currentCafeInformation.added} />
      <header>
        <img src={image} alt={`Xícara de café ${name}`} />
        <TagsCoffees>
          <h4>{tag1}</h4>
          {tag2 && <h4>{tag2}</h4>}
          {tag3 && <h4>{tag3}</h4>}
        </TagsCoffees>
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
          <Counter
            quantity={currentCafeInformation.quantity}
            getTheAmountOfEachCoffees={getTheAmountOfEachCoffees}
          />
          <button
            disabled={disabled}
            onClick={handleAddNewCoffee}
            title="Comprar"
          >
            <ShoppingCartSimple size={19} weight="fill" />
          </button>
        </div>
      </Buy>
    </CoffeeCardContainer>
  )
}

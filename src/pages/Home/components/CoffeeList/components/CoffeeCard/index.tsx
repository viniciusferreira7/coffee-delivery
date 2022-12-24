import { Buy, CoffeeCardContainer, TagsCoffess } from './styles'

import { Counter } from '../../../../../../components/Counter'

import { ShoppingCartSimple } from 'phosphor-react'

import { useContext, useEffect, useState } from 'react'
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
  const { addNewCoffee } = useContext(CoffeeContext)

  const [price, setPrice] = useState(number)
  const [disabled, setDisabled] = useState(false)
  const [buy, setBuy] = useState(false)
  const [quantity, setQuantity] = useState(1)

  function getTheAmountOfCoffees(amount: number) {
    setPrice(amount * number)
    setQuantity(amount)
  }

  function handleAddNewCoffee() {
    const newCoffee = {
      image,
      tag1,
      tag2,
      tag3,
      name,
      description,
      number,
      quantity,
    }

    setDisabled(true)

    addNewCoffee(newCoffee)

    setBuy(true)
  }

  useEffect(() => {
    if (price <= 0) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [price])

  return (
    <CoffeeCardContainer>
      <SuccessMessage buy={buy} />
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
          <Counter
            quantity={quantity}
            getTheAmountOfCoffees={getTheAmountOfCoffees}
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

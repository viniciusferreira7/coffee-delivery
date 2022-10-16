import TradicionalExpress from '../assets/coffees/tradicional-express.svg'
import AmericanExpress from '../assets/coffees/american-express.svg'

interface CoffeeType {
  image: string
  tag: string
  tag2?: string
  tag3?: string
  description: string
  price: number
}

export const AllCoffeeData: CoffeeType[] = [
  {
    image: TradicionalExpress,
    tag: 'Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price:9.9,
  },
  {
    image:AmericanExpress;
    tag:;
  }
]

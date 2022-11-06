import TraditionalExpress from '../assets/coffees/traditional-express.svg'
import AmericanExpress from '../assets/coffees/american-express.svg'
import CreamyEspresso from '../assets/coffees/creamy-espresso.svg'
import IcedEspresso from '../assets/coffees/iced-espresso.svg'
import CoffeeWithMilk from '../assets/coffees/coffee-with-milk.svg'
import Latte from '../assets/coffees/latte.svg'
import Capuccino from '../assets/coffees/capuccino.svg'
import Macchiato from '../assets/coffees/macchiato.svg'
import Moccacino from '../assets/coffees/moccacino.svg'
import HotChocolate from '../assets/coffees/hot-chocolate.svg'
import Cubano from '../assets/coffees/cubano.svg'
import Havaiano from '../assets/coffees/havaiano.svg'
import Arabe from '../assets/coffees/arabe.svg'
import Irlandes from '../assets/coffees/irlandes.svg'

interface CoffeeType {
  image: string
  tag1: string
  tag2?: string
  tag3?: string
  name: string
  description: string
  number: number
}

export const AllCoffeeData: CoffeeType[] = [
  {
    image: TraditionalExpress,
    tag1: 'Tradicional',
    name: 'Expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    number: 9.9,
  },
  {
    image: AmericanExpress,
    tag1: 'Tradicional',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    number: 9.8,
  },
  {
    image: CreamyEspresso,
    tag1: 'Tradicional',
    name: 'Expresso Creamoso',
    description: 'Café expresso tradicional com espuma cremosa',
    number: 10,
  },
  {
    image: IcedEspresso,
    tag1: 'Tradicional',
    tag2: 'Gelado',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    number: 8.5,
  },
  {
    image: CoffeeWithMilk,
    tag1: 'Tradicional',
    tag2: 'Com Leite',
    name: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    number: 10.2,
  },
  {
    image: Latte,
    tag1: 'Tradicional',
    tag2: 'Com Leite',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    number: 12.25,
  },
  {
    image: Capuccino,
    tag1: 'Tradicional',
    tag2: 'Com Leite',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    number: 11,
  },
  {
    image: Macchiato,
    tag1: 'Tradicional',
    tag2: 'Com Leite',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    number: 9.75,
  },
  {
    image: Moccacino,
    tag1: 'Tradicional',
    tag2: 'Com Leite',
    name: 'Moccacino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    number: 12.75,
  },
  {
    image: HotChocolate,
    tag1: 'Tradicional',
    tag2: 'Com Leite',
    name: 'Chocolate quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    number: 9,
  },
  {
    image: Cubano,
    tag1: 'Especial',
    tag2: 'Alcoólico',
    tag3: 'Gelado',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    number: 10.2,
  },
  {
    image: Havaiano,
    tag1: 'Especial',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    number: 13,
  },
  {
    image: Arabe,
    tag1: 'Especial',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    number: 9.6,
  },
  {
    image: Irlandes,
    tag1: 'Especial',
    tag2: 'Alcoólico',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    number: 11.45,
  },
]

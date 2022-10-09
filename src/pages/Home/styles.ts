import styled from 'styled-components'

export const HomeContainer = styled.main``

export const SectionContainer = styled.section``

const ITEMS_COLOR = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  grey: 'base-text',
  purple: 'purple',
} as const

interface itemsProps {
  itemsColor: keyof typeof ITEMS_COLOR
}

export const Items = styled.div<itemsProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > div {
    display: flex;

    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 9999px;

    background-color: ${(props) => props.theme[ITEMS_COLOR[props.itemsColor]]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

import styled from 'styled-components'

interface IntroSectionProps {
  background: string
}

export const IntroSectionContainer = styled.section<IntroSectionProps>`
  display: flex;
  align-items: flex-start;
  gap: 3.5rem;

  width: 100%;

  padding: 5.8rem 10.5% 6.75rem 10.5%;

  background-image: url(${(props) => props.background});

  & > div > header {
    max-width: 36.75rem;

    h1 {
      font-size: 3rem;
    }

    h3 {
      padding: 1rem 0 4.1rem 0;
      font-size: 1.25rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  & > div > footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    column-gap: 2.5rem;

    max-width: 35.43rem;

    font-size: 0.88rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    padding-top: 1rem;

    & > img {
      width: 20rem;
    }
  }
`

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

import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 90rem;

  margin: auto;
`

interface IntroSectionProps {
  background: string
}

export const IntroSectionContainer = styled.section<IntroSectionProps>`
  display: flex;
  align-items: flex-start;
  gap: 3.5rem;

  width: 100%;
  min-height: 54rem;

  padding: 5.8rem 10.5% 6.75rem 10.5%;

  background-image: url(${(props) => props.background});

  & > div > header {
    max-width: 36.75rem;

    h1 {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 3rem;
      line-height: 130%;
    }

    p {
      padding: 1rem 0 4.1rem 0;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  & > div > footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    column-gap: 2.5rem;

    max-width: 35.43rem;
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

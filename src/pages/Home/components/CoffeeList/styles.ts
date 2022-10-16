import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  width: 100%;
  max-width: 90rem;

  padding: 0 10.5%;
  margin: 2rem auto 0;

  & > header {
    h1 {
      font-size: 2rem;

      margin-bottom: 2.125rem;
    }
  }

  & > main {
    display: grid;
    row-gap: 2.5rem;
    column-gap: 2rem;
    grid-template-columns: repeat(4, minmax(256px, 1fr));

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`

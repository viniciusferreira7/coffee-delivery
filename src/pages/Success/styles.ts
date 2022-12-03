import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: grid;
  gap: 2.5rem;
  grid-template-areas:
    'header header'
    'orderInfo img';

  max-width: 70rem;
  width: 100%;
  margin: auto;
  margin-top: 5rem;

  img {
    grid-area: img;
    justify-self: flex-end;
  }

  @media screen and (max-width: 798px) {
    grid-template-areas:
      'header '
      'orderInfo';
    margin-top: 2rem;

    img {
      display: none;
    }
  }
`

export const Title = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    max-width: 22rem;

    h2 {
      font-size: 1.4rem;
    }

    h4 {
      font-size: 1rem;
    }
  }
`

export const OrderInfo = styled.section`
  grid-area: orderInfo;

  max-width: 32.875rem;
  width: 100%;
  padding: 1px;

  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  background: linear-gradient(
    90deg,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    padding: 2.5rem;

    border: 1px solid transparent;
    border-radius: 6px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;

    height: 100%;
    background: ${(props) => props.theme.white};
  }
`
const iconColor = {
  purple: 'purple',
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
} as const

interface IconProps {
  color: keyof typeof iconColor
}

export const Description = styled.div<IconProps>`
  grid-area: description;

  display: flex;
  gap: 0.75rem;
  align-items: center;

  max-width: 22.18rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[props.color]};
  }

  svg {
    color: ${(props) => props.theme.white};
  }

  @media screen and (max-width: 768px) {
    p {
      max-width: 16rem;
      font-size: 0.75rem;
    }
  }
`

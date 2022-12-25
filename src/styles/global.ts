import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar{
  width: 15px;
}
::-webkit-scrollbar-thumb{
  background-color: ${(props) => props.theme['purple-dark']};
  border-radius: 5px;
}
::-webkit-scrollbar-track{
  background-color: ${(props) => props.theme.background};
  border-radius: 5px;
}

:focus{
  outline: 0;
  box-sizing: 0 0 0 2px ${(props) => props.theme.yellow};
}

body{
  background-color:${(props) => props.theme.background} ;
  color:${(props) => props.theme['base-title']};
  -webkit-font-smoothing:antialiased;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  line-height:130%;
}

h1, h2 {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      line-height: 130%;
    }

`

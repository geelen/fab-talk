import React from 'react'
import theme from 'mdx-deck/themes'
import { css, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    src: url('${require('file-loader!./fonts/AcuminVariableConcept.otf.woff2')}');
    font-family: 'Acumin Variable Pro';
    font-style: normal;
  }
  
  @font-face {
    src: url('${require('file-loader!./fonts/ObviouslyVariable.woff2')}');
    font-family: 'ObviouslyVariable';
    font-style: normal;
  }
`

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: 'Acumin Variable Pro, ObviouslyVariable, Gibson, Avenir Next, Segoe UI, sans-serif',
  // custom colors
  colors: {
    text: 'rgb(234, 234, 236)',
    background: 'rgb(41, 43, 56)',
    link: '#0ff',
  },
  Provider: ({children}) => (
    <React.Fragment>
      <GlobalStyle/>
      {children}
    </React.Fragment>
  ),
  transitionDuration: 0,
  h1: css`
    font-size: 3em;
    font-variation-settings: "wdth" 115, "wght" 500, "slnt" 0;
  `
}
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

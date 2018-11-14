import React from 'react'
import theme from 'mdx-deck/themes'
import styled, { css, createGlobalStyle } from 'styled-components'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

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
  
  body::after {
    content: '@glenmaddern';
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    color: white;
    mix-blend-mode: difference;
    opacity: 0.6;
  }
  
  figcaption {
    font-variation-settings: "wdth" 70, "wght" 300, "slnt" 0;
    color: white;
    mix-blend-mode: difference;
    font-size: 0.7em;
    margin-top: 1em;
    opacity: 0.7;
  }
`

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: 'Acumin Variable Pro, ObviouslyVariable, Gibson, Avenir Next, Segoe UI, sans-serif',
  // custom colors
  colors: {
    ...theme.colors, // include existing theme colors
    text: 'rgb(234, 234, 236)',
    background: 'rgb(41, 43, 56)',
    link: '#0ff',
  },
  prism: {
    style: okaidia
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
    font-variation-settings: "wdth" 90, "wght" 700, "slnt" 0;
  `,
  h2: css`
    font-size: 2.5em;
    font-variation-settings: "wdth" 90, "wght" 700, "slnt" 0;
    margin: 0;
    em {
      font-style: inherit;    
      font-variation-settings: "wdth" 90, "wght" 700, "slnt" 9;
    }
  `,
  h3: css`
    text-transform: uppercase;
    font-variation-settings: "wdth" 100, "wght" 700, "slnt" 0;
    letter-spacing: 0.1em;
    color: #34e4e4;
  `,
  h4: css`
    margin: 0 0 0.5em 0;
    font-size: 1.5em;
    color: rgb(234, 234, 236);
    mix-blend-mode: difference;
    opacity: 0.7;
    letter-spacing: unset;
    font-variation-settings: "wdth" 90, "wght" 700, "slnt" 0;
  `,
  p: css`
    margin: 0;
    font-variation-settings: "wdth" 80, "wght" 300, "slnt" 0;
  `,
  blockquote: css`
    font-size: 1.1em;
    border-left: 8px solid;
    padding: 0 1em;
    margin: 0;
    font-variation-settings: "wdth" 80, "wght" 200, "slnt" 9;
    em {
      font-style: inherit;    
      font-variation-settings: "wdth" 80, "wght" 200, "slnt" 9;
    }
    strong {
      font-variation-settings: "wdth" 80, "wght" 600, "slnt" 9;
    }
  `
}
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

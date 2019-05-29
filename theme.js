import React from 'react'
import theme from 'mdx-deck/themes'
import styled, { css, createGlobalStyle } from 'styled-components'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

const GlobalStyle = createGlobalStyle`
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
    color: white;
    mix-blend-mode: difference;
    font-size: 0.7em;
    margin-top: 1em;
    opacity: 0.7;
  }
  
  span.smallpre ~ pre {
    font-size: 14px;
  }
`

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: 'Gibson, Avenir Next, Segoe UI, sans-serif',
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
    font-weight: 600;
    font-size: 2.6em;
  `,
  h2: css`
    font-weight: 600;
    font-size: 2.3em;
    margin: 0;
    letter-spacing: 0.02em;
    em {
      font-style: italic;    
      color: #34e4e4;
    }
  `,
  h3: css`
    font-weight: 600;
    font-size: 1.7em;
    margin: 0.25em 0;
    letter-spacing: 0.02em;
    em {
      font-style: italic;    
      color: #34e4e4;
    }
  `,
  h4: css`
    margin: 0 0 0.5em 0;
    font-size: 1.5em;
    color: rgb(234, 234, 236);
    mix-blend-mode: difference;
    opacity: 0.7;
    letter-spacing: unset;
  `,
  h5: css`
    color: inherit;
    margin: 0 0 1.5rem;
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
    font-weight: 600;
    em {
      font-style: italic;    
      color: #34e4e4;      
    }
    strong {
      font-weight: 600;    
      color: #34e4e4;
    }
  `,
  a: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  code: {
    color: '#34e4e4'
  },
  ul: css`
    font-size: 1.2em;
  `,
  li: css`
    margin: 0.2em 0;
  `
}
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

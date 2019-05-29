import React from 'react'
import styled from 'styled-components'

const common = `
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Image = styled.div`
  ${common};
  justify-content: flex-end;
  padding-bottom: 2rem;
  background: ${props => props.black ? 'black' : ''} url('${props => props.src}') no-repeat 50% 50%;
  height: 100vh;
  background-size: ${props => (props.contain ? 'contain' : 'cover')};
  width: ${props => (props.fill ? '100vw' : '50vw')};
  
  > * {
    opacity: 0.9;
    text-shadow: 0 2px 2px #000;
  }
  
  h2 {
    color: white;
    font-family: Impact;
    font-size: 12vmin;
  }
`

const Images = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
`

const Outer = styled.div`
  ${common};
  justify-content: flex-end;

  > :not(:first-child) {
    opacity: 0.5;
  }
`

const Light = styled.div`
  ${common};
  background: radial-gradient(white, #c5dff2);
  color: #003f80;

  img {
    max-height: 70vh;
    max-width: 80vw;
    &:first-child {
      max-height: 80vh;
      max-width: 90vw;
    }

    box-shadow: 0 0 0 1px #eee, 0 0 0 7px white, 0 0 0 8px #ddd,
      0 4px 24px 8px rgba(0, 0, 0, 0.3);
  }
`

const Gradient = styled.div`
  ${common};
  background: linear-gradient(45deg, #8f3c90, #ff2954);

  img {
    height: 80vh;
  }
`

const CodeSlide = styled.div`
  ${common};

  h1 {
    font-size: 2em;
    margin: 4rem 0 0;
  }
`

export default {
  Image: (url, { contain = true, dark = false} = {}) => ({ children }) => (
    <Light>
      <Image src={url} fill contain={contain} dark={dark}>
        {children}
      </Image>
    </Light>
  ),
  Images: urls => ({ children }) => (
    <Outer>
      <Images>
        {urls.map((url, i) => (
          <Image key={i} src={url} alt="" />
        ))}
      </Images>
      {children}
    </Outer>
  ),
  Light: ({ children }) => <Light>{children}</Light>,
  Gradient: ({ children }) => <Gradient>{children}</Gradient>,
  Code: ({ children }) => <CodeSlide>{children}</CodeSlide>
}

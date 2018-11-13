import React from 'react'
import styled, {css} from 'styled-components'

const Image = styled.div`
  background: url('${ props => props.src }') no-repeat 50% 50%;
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

const Images = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  z-index: -1;
`

const Outer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  
  > :not(:first-child) {
    opacity: 0.5;
  }
`

export default (urls) => ({children}) => (
  <Outer>
    <Images>
      { urls.map((url, i) => (
        <Image key={i} src={url} alt=""/>
      ))}
    </Images>
    { children }
  </Outer>
)

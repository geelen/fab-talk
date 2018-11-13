import React from 'react'
import styled, {css} from 'styled-components'

const Image = styled.div`
  background: url('${ props => props.src }') no-repeat 50% 50%;
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

const Outer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

export default ({urls}) => (
  <Outer num={urls.length}>
    { urls.map((url, i) => (
      <Image key={i} src={url} alt=""/>
    ))}
  </Outer>
)

import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1``

const MIN_WIDTH = 200
const MAX_WIDTH = 650
const MIN_WEIGHT = 200
const MAX_WEIGHT = 500

const size = ({ size, lh, total, length, max, width, weight }) => {
  console.log({ size, lh, total, length, max, width, weight })

  return `
    font-variation-settings: "wdth" ${width}, "wght" ${weight};
    font-size: ${size}em;
    line-height: ${lh};
  `
}

const Line = styled.span`
  display: block;
  ${size};
`

export default ({ lines }) => {
  let total = 0
  const split = lines
    .trim()
    .split('\n')
    .map(line => {
      const [_size, _lh, _width, _weight, ...text] = line.trim().split(/\s+/)
      const [size, lh, width, weight] = [_size, _lh, _width, _weight].map(parseFloat)
      total += size
      return {
        size,
        width,
        weight,
        lh,
        text: text.join(' ')
      }
    })
  const max = Math.max(...split.map(({ size }) => size))
  return (
    <H1>
      {split.map((props, i) => (
        <Line
          key={i}
          total={total}
          max={max}
          length={props.text.length}
          {...props}
        >
          {props.text}
        </Line>
      ))}
    </H1>
  )
}

import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube';

const Video = styled(YouTube).attrs({
  opts: {
    playerVars: {
      rel: 0
    }
  }
})`
  width: calc(100vw - 2rem);
  height: calc(100vh - 2rem);
  margin: 1rem;
  object-fit: contain;
`

export default Video

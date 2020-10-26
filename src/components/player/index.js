import React, { useState, useContext, useEffect, createContext } from 'react'
import ReactDOM from 'react-dom'
import { Container, Button, Overlay, Inner } from './styles/player'
import { FeautureContext } from '../card'

export const PlayerContext = createContext()

export default function Player ({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>
        {children}
      </Container>
    </PlayerContext.Provider>)
}

Player.Video = function PlayerVideo ({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)
  const { itemFeature } = useContext(FeautureContext)
  const [src, setSrc] = useState('')
  const API_KEY = process.env.REACT_APP_API_KEY

  useEffect(() => {
    async function fetchMyAPI () {
      let response = await fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=5&q=${itemFeature.slug}&key=${API_KEY}`)
      response = await response.json()
      const videos = response.items.filter(item => item.id.kind === 'youtube#video')
      console.log(videos)
      videos && setSrc(videos[0].id.videoId)
    }

    fetchMyAPI()
  }, [itemFeature.slug])

  return showPlayer ? ReactDOM.createPortal(
    <Overlay
      onClick={() => setShowPlayer(false)}
      {...restProps}
    >
      <Inner>
        <iframe
          title={itemFeature.title}
          src={`https://www.youtube.com/embed/${src}`}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
        />
      </Inner>
    </Overlay>,
    document.body
  ) : null
}

Player.Button = function PlayerButton ({ ...restProps }) {
  const { setShowPlayer } = useContext(PlayerContext)
  return (<Button onClick={() => setShowPlayer(true)}>Play</Button>)
}

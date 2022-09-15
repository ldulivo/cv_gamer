import React, { useEffect, useRef } from 'react'
import playerRunA from '../img/player/crocodile/run.gif'
import playerIdleA from '../img/player/crocodile/idle.gif'
import playerRunB from '../img/player/tiger/run.gif'
import playerIdleB from '../img/player/tiger/stand.gif'

export const Player = ({ playerX, run = false, sideLeft, skin = 'B' }) => {
  const player = useRef()
  let playerRun
  let playerIdle

  if (skin === 'A') {
    playerRun = playerRunA
    playerIdle = playerIdleA
  } else {
    playerRun = playerRunB
    playerIdle = playerIdleB
  }

  useEffect(() => {
    player.current.style.left = `${playerX - 50}px`
  }, [playerX])

  return (
    <div
      ref={player}
      id='player'
      className={`player ${(sideLeft) ? 'player_left' : ''}`}
    >
      {
        (run)
          ? <img src={playerRun} alt="player run" />
          : <img src={playerIdle} alt="player idle" />
      }
    </div>
  )
}

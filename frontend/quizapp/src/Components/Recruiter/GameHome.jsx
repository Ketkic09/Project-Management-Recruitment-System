import React, { useContext } from 'react'
import { GameContext } from '../../Helpers/Contexts'

function GameHome() {
    const{game,setGame}=useContext(GameContext)
    console.log(game)
  return (
    <div>GameHome</div>
  )
}

export default GameHome
import React,{useContext} from 'react'
import { GameContext } from '../../Helpers/Contexts'

function GameEnd() {
    const{game,setGame}=useContext(GameContext)
    console.log(game)
  return (
    <div>GameEnd</div>
  )
}

export default GameEnd
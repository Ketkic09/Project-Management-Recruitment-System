import React,{useContext,useState} from 'react'
import {GameContext} from '../../Helpers/Contexts'
import GameEnd from './GameEnd'
import GameHome from './GameHome'
function Game() {
    const[game,setGame]=useState("end")
  return (
    <GameContext.Provider value={{game,setGame}}>
        {game==='home' && <GameHome/>}
        {game==='end' && <GameEnd/>}
    </GameContext.Provider>
  )
}

export default Game
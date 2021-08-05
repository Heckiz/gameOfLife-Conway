import React from 'react'
import GamePanel from './components/GamePanel/GamePanel'
import CellGrid from './components/CellGrid/CellGrid'


function App() {


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>The Game of Life - Conway</h1>
      <GamePanel />
      <CellGrid />
    </div>
  )
}

export default App

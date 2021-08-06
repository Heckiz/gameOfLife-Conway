import React from 'react'
import GamePanel from '../components/GamePanel/GamePanel'
import CellGrid from '../components/CellGrid/CellGrid'
import { useSelector } from 'react-redux'

export default function GameOfLife() {
    const {
        cellGrid,
        gameConfig,
        running,
        generations
    } = useSelector(state => state.gameOfLifeData);

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>The Game of Life - Conway</h1>
            <GamePanel gameConfig={gameConfig} running={running} generations={generations} />
            <CellGrid cellGrid={cellGrid} gameConfig={gameConfig} />
        </div>
    )
}

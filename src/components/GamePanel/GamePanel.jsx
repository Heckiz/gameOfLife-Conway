import React from 'react'
import useInterval from '../../common/useInterval';
import { useDispatch } from 'react-redux'
import {
    handleGrid,
    handleRunning,
    newCellGrid,
    handleSpeed,
    drawOscillators,
    playSimulation
} from "../../app/gameOfLife/gameOfLifeSlice";



export default function GamePanel({ gameConfig, running, generations }) {

    const dispatch = useDispatch();

    useInterval(() => dispatch(playSimulation()), running ? gameConfig.speed : null)

    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>

            <div>

                <button style={running ? { background: "red" } : { background: "green" }}
                    onClick={() => dispatch(handleRunning())}
                >
                    {
                        !running
                            ? <h3>START</h3>
                            : <h3>PAUSE</h3>
                    }

                </button>

                <button style={{ background: "blue", color: "white" }}
                    onClick={() => {
                        dispatch(newCellGrid(false));
                        if (running) dispatch(handleRunning())
                    }}>
                    <h3>RESTART</h3>
                </button>

                <button style={{ background: "tomato" }}
                    onClick={() => dispatch(playSimulation())}>
                    <h3>NEXT STEEP</h3>
                </button>

                <button style={{ background: "yellow", margin: "20px" }}
                    onClick={() => dispatch(drawOscillators())}
                >
                    <h3>DRAW OSCILLATORS</h3>
                </button>

            </div>

            <h2>Generations : {generations}</h2>

            <div>
                <h3>Grid</h3>
                <input onChange={(e) => dispatch(handleGrid(e.target.value))} type="range" min="20" max="50" step="5" value={gameConfig.rows} />

            </div>
            <div>
                <h3>Speed</h3>
                <input onChange={(e) => dispatch(handleSpeed(e.target.value))} type="range" min="-800" max="-0" step="50" value={-gameConfig.speed} />

            </div>

        </div>
    )
}


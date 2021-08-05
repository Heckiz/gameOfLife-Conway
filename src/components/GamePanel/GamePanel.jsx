import React from 'react'
import { handleGrid, handleRunning, newCellGrid, handleSpeed, drawOscillators, playSimulation } from "../../app/gameSlice";
import { useDispatch, useSelector } from 'react-redux'
import useInterval from '../../common/useInterval';


export default function GamePanel() {
    const { gameConfig, running, generations } = useSelector(state => state.gameData);
    const dispatch = useDispatch();

    useInterval(() => dispatch(playSimulation()), running ? gameConfig.speed : null)


    return (
        <div>
            <button style={{ margin: "20px" }}
                onClick={() => dispatch(handleRunning())}
            >
                {
                    !running
                        ? <h3>START</h3>
                        : <h3>PAUSE</h3>
                }
            </button>

            <button style={{ marginRight: "20px" }}
             onClick={() => {
                dispatch(newCellGrid(true));
                if (running) dispatch(handleRunning())
            }}>
                <h3>RESTART</h3>
            </button>

            <button onClick={() => dispatch(playSimulation())}>
                <h3>NEXT</h3>
            </button>

            <button style={{ marginRight: "20px" }}
            onClick={()=>dispatch(drawOscillators())}
            >
                <h3>Osilator</h3>
            </button>

            <h2>Generations : {generations}</h2>
            <h3>Grid</h3>
            <input onChange={(e) => dispatch(handleGrid(e.target.value))} type="range" min="20" max="50" step="5" value={gameConfig.rows} />
            <h3>Speed</h3>
            <input onChange={(e) => dispatch(handleSpeed(e.target.value))} type="range" min="-800" max="-0" step="50" value={-gameConfig.speed} />

        </div>
    )
}


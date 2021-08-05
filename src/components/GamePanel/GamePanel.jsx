import React from 'react'
import { handleGrid, handleRunning, newCellGrid, handleSpeed, playSimulation } from "../../app/gameSlice";
import { useDispatch, useSelector } from 'react-redux'
import useInterval from '../../common/useInterval';


export default function GamePanel() {
    const { gameConfig, running, generations } = useSelector(state => state.gameData);
    const dispatch = useDispatch();
    
    useInterval(()=> dispatch(playSimulation()), running ? gameConfig.speed : null )


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

            <button onClick={() =>{ 
                dispatch(newCellGrid(gameConfig));
                if(running) dispatch(handleRunning())
            }}>
                <h3>RESTART</h3>
            </button>
            <h2>Generations : {generations}</h2>
            <h3>Grid</h3>
            <input onChange={(e) => dispatch(handleGrid(e.target.value))} type="range" min="10" max="40" step="5" defaultValue="30"/>
            <h3>Speed</h3>
            <input onChange={(e) => dispatch(handleSpeed(e.target.value))} type="range"  min="-800" max="-0" step="50" defaultValue="-300"/>

        </div>
    )
}


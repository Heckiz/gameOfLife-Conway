import React from 'react'
import { handleRunning, newCellGrid, playSimulation } from "../../app/gameSlice";
import { useDispatch, useSelector } from 'react-redux'
import useInterval from '../../common/useInterval';


export default function GamePanel() {
    const { gameConfig, running } = useSelector(state => state.gameData);
    const dispatch = useDispatch();
    
    useInterval(()=> dispatch(playSimulation()), running ? 300 : null )
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

            <button onClick={() => dispatch(newCellGrid(gameConfig))}>
                <h3>RESTART</h3>
            </button>

        </div>
    )
}


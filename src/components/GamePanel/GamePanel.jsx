import React from 'react'
import { handleRunning, newCellGrid } from "../../app/gameSlice";
import { useDispatch, useSelector } from 'react-redux'


export default function GamePanel() {
    const { gameConfig, running } = useSelector(state => state.gameData);
    const dispatch = useDispatch();
    return (
        <div>
            <button style={{ margin: "20px" }}
                onClick={() => dispatch(handleRunning())}
            >
                {
                    running ? <h3>INICIAR</h3> : <h3>DETENER</h3>
                }
            </button>

            <button onClick={() => dispatch(newCellGrid(gameConfig))}>
                <h3>REINICIAR</h3>
            </button>

        </div>
    )
}


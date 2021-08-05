import React, { useEffect } from 'react'
import Cell from './Cell';
import { newCellGrid } from "../../app/gameSlice";
import { useSelector, useDispatch } from 'react-redux'

export default function CellGrid() {


    const { gameConfig, cellGrid } = useSelector(state => state.gameData);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newCellGrid(false));
    }, [])
    

    return (
        <div style={{
            background:"#34495E",
            justifyContent:"center",
            display: "grid",
            gridTemplateColumns: `repeat(${gameConfig.cols}, ${95/gameConfig.cols}vw)`,
        }}>
            {
               
                cellGrid.map((rows, rowIndex) => rows.map((cols, colIndex) => (

                    <Cell
                        key={`${rowIndex, colIndex}`}
                        rowIndex={rowIndex}
                        colIndex={colIndex}
                        life={cols}
                        dispatch={dispatch}
                        cantRows={gameConfig.rows}
                    />

                )))
            }
        </div>
    )
}

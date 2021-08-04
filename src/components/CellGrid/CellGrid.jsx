import React, { useEffect } from 'react'
import Cell from './Cell';
import { newCellGrid } from "../../app/gameSlice";
import { useSelector, useDispatch } from 'react-redux'

export default function CellGrid() {


    const { gameConfig, cellGrid } = useSelector(state => state.gameData);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newCellGrid(gameConfig));
    }, [])
    

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gameConfig.cols}, 25px)`,
        }}>
            {
               
                cellGrid.map((rows, rowIndex) => rows.map((cols, colIndex) => (

                    <Cell
                        key={`${rowIndex, colIndex}`}
                        rowIndex={rowIndex}
                        colIndex={colIndex}
                        life={cols}
                        dispatch={dispatch}
                    />

                )))
            }
        </div>
    )
}

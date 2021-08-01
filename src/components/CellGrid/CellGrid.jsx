import React, { useState } from 'react'
import Cell from './Cell';
import { useSelector } from 'react-redux'

function newEmptyGrid(gameConfig) {
    const grid = [];
    for (let i = 0; i < gameConfig.rows; i++) {
        grid.push(Array.from(Array(gameConfig.cols), () => false));
    }

    return grid;
};
export default function CellGrid() {


    const { gameConfig } = useSelector(state => state.gameData);

    const [grid, setGrid] = useState(newEmptyGrid(gameConfig));
    console.log(grid)

    return (
        <div style={{
            display: "grid",
          gridTemplateColumns: `repeat(${gameConfig.cols}, 35px)`
        }}>
            {
               grid.map((rows, rowIndex) => rows.map((cols, colIndex) => (
                   <Cell 
                   key={`${rowIndex,colIndex}`}

                   />
               )))
            }
        </div>
    )
}

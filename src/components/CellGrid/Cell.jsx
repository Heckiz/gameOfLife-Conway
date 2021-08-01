import React from 'react'
import { handleLifeCell } from '../../app/gameSlice'



export default function Cell({ dispatch, colIndex, rowIndex, life }) {

    const handleCell = (row, col) => {
        const position = { row, col }
        dispatch(handleLifeCell(position));
    }

    return (
        <button
            style={styleCell(life)}
            onClick={() => handleCell(rowIndex, colIndex)}
        />
    )
}

const styleCell = (life) => {
    return {
        height: '25px',
        border: '2px solid black',
        background: life ? 'red' : 'blue'
    }
}
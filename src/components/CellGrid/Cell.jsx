import React from 'react'
import { handleLifeCell } from '../../app/gameSlice'



export default function Cell({ dispatch, colIndex, rowIndex, life, cantRows }) {

    const handleCell = (row, col) => {
        const position = { row, col }
        dispatch(handleLifeCell(position));
    }

    return (
        <div
            style={styleCell(life, cantRows)}
            onClick={() => handleCell(rowIndex, colIndex)}
        />
    )
}

const styleCell = (life, cantRows) => {
    return {
        height: `${75/cantRows}vh`,
        border: '1px solid black',
        borderRadius:"5%",
        background: life ? '#FADBD8' : '#1C2833'
    }
}
import { Box } from '@chakra-ui/react';
import React from 'react'
import { handleLifeCell } from '../../../app/gameOfLife/gameOfLifeSlice'



export default function Cell({ dispatch, colIndex, rowIndex, life, cantRows }) {

    const handleCell = (row, col) => {
        const position = { row, col }
        dispatch(handleLifeCell(position));
    }

    return (
        <Box
            height={{base: `${60/cantRows}vh`}} border="1px solid black" borderRadius="5%"
            backgroundColor={life ? '#FADBD8' : '#1C2833'}
            onClick={() => handleCell(rowIndex, colIndex)}
        />
    )
}


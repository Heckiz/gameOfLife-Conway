import React, { useEffect } from 'react'
import Cell from './Cell';
import { newCellGrid } from "../../app/gameOfLife/gameOfLifeSlice";
import { useDispatch } from 'react-redux'
import { Box } from '@chakra-ui/react';

export default function CellGrid({ cellGrid, gameConfig }) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newCellGrid(true));
    }, [])


    return (
        <Box h="60vh" d="grid" justifyContent="center" overflow="hidden"
            gridTemplateColumns={{ base: `repeat(${gameConfig.cols}, ${100 / gameConfig.cols}%)`, lg: `repeat(${gameConfig.cols}, ${70 / gameConfig.cols}%)` }} >
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
        </Box>
    )
}

import React from 'react'
import GamePanel from '../components/GamePanel/GamePanel'
import CellGrid from '../components/CellGrid/CellGrid'
import { useSelector } from 'react-redux'
import { Box, Text} from '@chakra-ui/react';
import Footer from '../components/Footer/Footer';

export default function GameOfLife() {
    const {
        cellGrid,
        gameConfig,
        running,
        generations
    } = useSelector(state => state.gameOfLifeData);


    return (
        <Box>
            <Box
                d="flex" h="5vh" justifyContent="center" alignItems="center" boxShadow="2xl"
            >
                <Text
                    px="4" bg="#F9E8B5"
                    fontSize={{base:"sm", md:"lg", lg:"2xl"}} as="samp"
                    textShadow="1px 1px 2px #F77373"
                >
                    The Game of Life - Conway
                </Text>

            </Box>

            <CellGrid cellGrid={cellGrid} gameConfig={gameConfig} />
            <GamePanel gameConfig={gameConfig} running={running} generations={generations} />
       <Footer/>
        </Box>
    )
}

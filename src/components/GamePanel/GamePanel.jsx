import React from 'react'
import useInterval from '../../common/useInterval';
import { useDispatch } from 'react-redux'
import {
    handleGrid,
    handleRunning,
    newCellGrid,
    handleSpeed,
    drawOscillators,
    playSimulation
} from "../../app/gameOfLife/gameOfLifeSlice";
import { Box, Button, Icon, Grid, Text, GridItem } from '@chakra-ui/react';
import { FaPlay, FaPause, FaRedoAlt, FaAngleDoubleRight } from "react-icons/fa"



export default function GamePanel({ gameConfig, running, generations }) {

    const dispatch = useDispatch();

    useInterval(() => dispatch(playSimulation()), running ? gameConfig.speed : null)

    return (
        <Box border="2px solid red" display="flex" justifyContent="space-around" w="100vw">

            <Grid w="60vw"
                gap={6} p="5" 
                templateColumns="repeat(3, 1fr)"
            >

                <Button
                    w={{ base: "0%", sm: "50%" }} transform="scale(1.5)"
                    backgroundColor={running ? "red.300" : "green.300"}
                    borderRadius="full"
                    _hover={{
                        backgroundColor: running ? "red.400" : "green.400",
                        transform: "scale(1.3)"
                    }}
                    onClick={() => dispatch(handleRunning())}
                >
                    {
                        !running
                            ? <Icon as={FaPlay} />
                            : <Icon as={FaPause} />
                    }

                </Button>

                <Button
                    w={{ base: "0%", sm: "50%" }} transform="scale(1.5)"
                    backgroundColor="blue.300"
                    _hover={{
                        backgroundColor: "blue.400",
                        transform: "scale(1.3)"
                    }}
                    borderRadius="100"

                    onClick={() => {
                        dispatch(newCellGrid(false));
                        if (running) dispatch(handleRunning())
                    }}>
                    <Icon as={FaRedoAlt} />
                </Button>

                <Button
                    w={{ base: "0%", sm: "50%" }} transform="scale(1.5)"
                    backgroundColor="yellow.300"
                    _hover={{
                        backgroundColor: "yellow.400",
                        transform: "scale(1.3)"
                    }}
                    borderRadius="100"
                    onClick={() => dispatch(playSimulation())}>
                    <Icon as={FaAngleDoubleRight} />
                </Button>

            </Grid>

                    <Box w="30vw">
                        <h1>as</h1>
                    </Box>
            {/* <Button
                      transform="scale(1.5)" p="2"
                   _hover={{
                       backgroundColor: "tomato",
                       transform: "scale(1.3)"
                   }}
                   borderRadius="10"
                    backgroundColor="papayawhip"
                    onClick={() => dispatch(drawOscillators())}
                >
                    <Text as="samp" fontSize="xs">DRAW OSCILLATORS</Text>
                </Button> */}

            {/* <Box>
                <h2>Generations : {generations}</h2>

                <div>
                    <h3>Grid</h3>
                    <input onChange={(e) => dispatch(handleGrid(e.target.value))} type="range" min="20" max="50" step="5" value={gameConfig.rows} />

                </div>
                <div>
                    <h3>Speed</h3>
                    <input onChange={(e) => dispatch(handleSpeed(e.target.value))} type="range" min="-800" max="-0" step="50" value={-gameConfig.speed} />

                </div>
            </Box> */}
        </Box>
    )
}


import React from 'react'

import { Button, Grid, Icon, Text } from '@chakra-ui/react';
import { FaPlay, FaPause, FaRedoAlt, FaInfinity, FaForward } from "react-icons/fa"


export default function ControlButtons(
    {
        dispatch,
        running,
        handleRunning,
        playSimulation,
        drawOscillators,
        newCellGrid }) {

    return (
        <Grid
            gap={{ base: "8", lg: "1" }}
            w="60%" p="5"
            templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        >
            <Button  //PLAY/PAUSE
                w={{ base: "0%", sm: "70%", lg: "50%" }} transform="scale(1.5)"
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

            <Button //RESTART
                w={{ base: "0%", sm: "70%", lg: "50%" }}
                backgroundColor="blue.300" transform="scale(1.5)"
                _hover={{
                    backgroundColor: "blue.400",
                    transform: "scale(1.3)"
                }}
                borderRadius="100"

                onClick={() => {
                    dispatch(newCellGrid(false));
                    if (running) dispatch(handleRunning())
                }}
            >

                <Icon as={FaRedoAlt} />

            </Button>

            <Button //NEXT-STEEP
                w={{ base: "0%", sm: "70%", lg: "50%" }}
                backgroundColor="yellow.300" transform="scale(1.5)"
                _hover={{
                    backgroundColor: "yellow.400",
                    transform: "scale(1.3)"
                }}
                borderRadius="100"
                onClick={() => dispatch(playSimulation())}>
                <Icon as={FaForward} />
            </Button>

            <Button //DRAW OSCILLATORS
                w={{ base: "0%", sm: "70%", lg: "50%" }}
                backgroundColor="gray.300" transform="scale(1.5)"
                _hover={{
                    backgroundColor: "gray.400",
                    transform: "scale(1.3)"
                }}
                borderRadius="100" d="grid" justifyContent="center"
                onClick={() => dispatch(drawOscillators())
                }>
                <Text fontSize="5px" d="grid" >
                    <Icon as={FaInfinity} mx="auto" fontSize="xl" />

                    OSCILLATORS</Text>
            </Button>

        </Grid>
    )
}

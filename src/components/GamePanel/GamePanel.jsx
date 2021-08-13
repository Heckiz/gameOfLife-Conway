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
import { Button, Icon, Grid, Text, Flex, Menu, MenuButton, MenuList, MenuItem, GridItem, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box } from '@chakra-ui/react';
import { FaPlay, FaPause, FaRedoAlt, FaAngleDoubleRight, FaWrench, FaInfinity, FaChessBoard,FaForward } from "react-icons/fa"



export default function GamePanel({ gameConfig, running, generations }) {

    const dispatch = useDispatch();

    useInterval(() => dispatch(playSimulation()), running ? gameConfig.speed : null)

    return (
        <Flex justifyContent="center" >

            <Flex p="5"
                w={{ base: "100%", lg: "70vw" }}

            >

                <Grid
                    gap={{ base: "6", lg: "1" }}
                    w="60%" p="5"
                    templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
                >
                    <Button
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

                    <Button
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

                    <Button
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

                    <Button
                        w={{ base: "0%", sm: "70%", lg: "50%" }}
                        backgroundColor="gray.300" transform="scale(1.5)"
                        _hover={{
                            backgroundColor: "gray.400",
                            transform: "scale(1.3)"
                        }}
                        borderRadius="100"
                        onClick={() => dispatch(drawOscillators())
                        }>
                        <Icon as={FaInfinity} />
                    </Button>


                </Grid>

                <Grid w="40%"
                >
                    <GridItem
                        borderBottom="2px solid red"
                        d={{ base: "grid", lg: "flex" }} mb="5">

                        <Text textAlign="center"
                            as="samp" fontSize={{ base: "xl", sm: "4xl" }}
                        >
                            GENERATION
                        </Text >

                        <Text fontSize="xl" textAlign="center">
                            {generations}
                        </Text>

                    </GridItem>

                    <Menu >
                        <MenuButton >
                            <Button w="90%"
                                transform={{ base: "scale(1.2)" }} w="max-content"
                                _hover={{
                                    backgroundColor: "teal.500",
                                }}
                                borderRadius="10"
                                backgroundColor="teal.300"
                            >
                                <Icon fontSize="30px" as={FaWrench} />
                            </Button>

                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Text as="cite" px="2">GRID</Text>
                                <Slider aria-label="slider-ex-4" defaultValue={30}>
                                    <SliderTrack bg="red.100">

                                        <SliderFilledTrack bg="tomato" />
                                    </SliderTrack>
                                    <SliderThumb boxSize={6}>
                                        <Box color="tomato" as={FaChessBoard} />
                                    </SliderThumb>
                                </Slider>
                            </MenuItem>
                            <MenuItem>
                                <Text as="cite" px="2">SPEED</Text>
                                <Slider aria-label="slider-ex-4" defaultValue={30}>
                                    <SliderTrack bg="red.100">

                                        <SliderFilledTrack bg="blue.300" />
                                    </SliderTrack>
                                    <SliderThumb boxSize={6}>
                                        <Box color="blue.400" as={FaAngleDoubleRight} />
                                    </SliderThumb>
                                </Slider>
                            </MenuItem>
                        </MenuList>
                    </Menu>


                </Grid>


            </Flex>
        </Flex>
    )
}


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

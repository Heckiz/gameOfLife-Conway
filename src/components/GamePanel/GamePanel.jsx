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
import { FaPlay, FaPause, FaRedoAlt, FaAngleDoubleRight, FaCogs, FaInfinity, FaChessBoard, FaForward } from "react-icons/fa"
import {
    Button,
    Icon,
    Grid,
    Text,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    GridItem,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Box
} from '@chakra-ui/react';

export default function GamePanel({ gameConfig, running, generations }) {

    const dispatch = useDispatch();

    useInterval(() => dispatch(playSimulation()), running ? gameConfig.speed : null)

    return (
        <Flex justifyContent="center" > 

            <Flex px="5" pb="1" bg="#F9E8B5"
                w={{ base: "100%", lg: "70vw" }} h="30vh"
                alignItems="center"
            >

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
                        borderRadius="100"
                        onClick={() => dispatch(drawOscillators())
                        }>
                        <Icon as={FaInfinity} />
                    </Button>

                </Grid>

                <Grid w="40%">

                    <GridItem
                        borderBottom="2px solid #6C3483"
                        d={{ base: "grid", lg: "flex" }} mb="3">

                        <Text textAlign="center"
                            as="samp" fontSize={{ base: "xl", sm: "4xl" }}
                        >
                            GENERATION
                        </Text >

                        <Text fontSize="xl" textAlign="center">
                            {generations}
                        </Text>

                    </GridItem>

                    {/* config option on small devices */}
                    <GridItem display={{ base: "block", lg: "none" }}
                        mx="auto" onClick={() => { if (running) { dispatch(handleRunning()) } }} >

                        <Menu>
                            <MenuButton w="90px"
                                borderRadius="5"
                                backgroundColor="#A9CCE3">
                                <Icon fontSize="40px" as={FaCogs} />
                            </MenuButton>

                            <MenuList>
                                <MenuItem>
                                    <Text as="cite" px="2">CELL GRID</Text>
                                    <Slider aria-label="slider-ex-1" onChange={(value) => dispatch(handleGrid(value))}
                                        defaultValue={gameConfig.rows} min={20} max={50} step={5}>
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
                                    <Slider onChange={(value) => dispatch(handleSpeed(value))}
                                        defaultValue={-gameConfig.speed} min={-800} max={-0} step={50}>
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

                    </GridItem>

                    {/* config option on large devices */}
                    <GridItem display={{ base: "none", lg: "flex" }} justifyContent="space-around">

                        <Box w="40%">
                            <Text as="cite" px="2">GRID</Text>
                            <Slider aria-label="slider-ex-1" onChange={(value) => dispatch(handleGrid(value))} defaultValue={gameConfig.rows} min={20} max={50} step={5}>
                                <SliderTrack bg="red.100">
                                    <SliderFilledTrack bg="tomato" />
                                </SliderTrack>
                                <SliderThumb boxSize={6}>
                                    <Box color="tomato" as={FaChessBoard} />
                                </SliderThumb>
                            </Slider>
                        </Box>

                        <Box w="40%">
                            <Text as="cite" px="2">SPEED</Text>
                            <Slider onChange={(value) => dispatch(handleSpeed(value))} defaultValue={-gameConfig.speed} min={-800} max={-0} step={50}>
                                <SliderTrack bg="red.100">
                                    <SliderFilledTrack bg="blue.300" />
                                </SliderTrack>
                                <SliderThumb boxSize={10}>
                                    <Box color="blue.400" as={FaAngleDoubleRight} />
                                </SliderThumb>
                            </Slider>
                        </Box>

                    </GridItem>

                </Grid>


            </Flex>
        </Flex>
    )
}


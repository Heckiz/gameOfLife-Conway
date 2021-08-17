import React from 'react'
import { Box, Button, Grid, GridItem, Icon, Link, List, ListIcon, ListItem, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text, useDisclosure } from '@chakra-ui/react'
import { FaAngleDoubleRight, FaBaby, FaChessBoard, FaChild, FaCogs, FaInfoCircle, FaSkullCrossbones } from 'react-icons/fa'

export default function SettingButtons(
    {
        dispatch,
        gameConfig,
        generations,
        running,
        handleRunning,
        handleGrid,
        handleSpeed }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Grid w="40%">

            <GridItem
                borderBottom="2px solid teal"
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

            <GridItem
                display={{ base: "flex", lg: "none" }} mx="auto"
                onClick={() => { if (running) { dispatch(handleRunning()) } }}
            >

                <Menu>

                    <MenuButton
                        w="90px"
                        borderRadius="5"
                        backgroundColor="#A9CCE3">
                        <Icon fontSize="40px" as={FaCogs} />
                    </MenuButton>

                    <MenuList>
                        <MenuItem>
                            <Text as="cite" px="2">CELL GRID</Text>
                            <Slider onChange={(value) => dispatch(handleGrid(value))}
                                value={gameConfig.rows} min={20} max={50} step={5}>
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
                                value={-gameConfig.speed} min={-800} max={-0} step={50}>
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
                    <Text as="cite" px="2">CELL GRID</Text>
                    <Slider aria-label="slider-ex-1" onChange={(value) => dispatch(handleGrid(value))} value={gameConfig.rows} min={20} max={50} step={5}>
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
                    <Slider onChange={(value) => dispatch(handleSpeed(value))} value={-gameConfig.speed} min={-800} max={-0} step={50}>
                        <SliderTrack bg="red.100">
                            <SliderFilledTrack bg="blue.300" />
                        </SliderTrack>
                        <SliderThumb boxSize={10}>
                            <Box color="blue.400" as={FaAngleDoubleRight} />
                        </SliderThumb>
                    </Slider>
                </Box>

            </GridItem>


            {/* RULES SURVIVAL MODAL */}
            
            <GridItem
                pt="2" d="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Button bg="teal.300"
                    onClick={onOpen} mx="3"
                    w={{ base: "90px", lg: "max-content" }}
                >
                    <Icon as={FaInfoCircle}
                        fontSize={{ base: "2xl", lg: "md" }} />

                    <Text
                        d={{ base: "none", lg: "block" }}
                        p="1" as="samp"
                    >
                        RULES OF GAME

                    </Text>

                </Button>

                <Modal isOpen={isOpen} onClose={onClose} >

                    <ModalOverlay />
                    <ModalContent bg="#1C2833" mx="3">
                        <ModalHeader textAlign="center" color="teal.300" as="samp">RULES OF SURVIVAL</ModalHeader>
                        <ModalCloseButton color="white" fontSize="lg" />
                        <ModalBody color="white" >
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={FaSkullCrossbones} color="red.300" />
                                    Any live cell with fewer than two live neighbours dies, as if by underpopulation.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaChild} color="green.200" />
                                    Any live cell with two or three live neighbours lives on to the next generation.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaSkullCrossbones} color="red.300" />
                                    Any live cell with more than three live neighbours dies, as if by overpopulation.
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaBaby} color="green.200" />
                                    Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                                </ListItem>
                            </List>
                        </ModalBody>

                        <ModalFooter>
                            <Link href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" isExternal>
                                <Button variant="link">+info</Button>
                            </Link>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </GridItem>

        </Grid>
    )
}

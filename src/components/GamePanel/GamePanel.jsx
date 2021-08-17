import React from 'react'
import useInterval from '../../common/useInterval';
import { Flex} from '@chakra-ui/react';
import ControlButtons from './ControlButtons/ControlButtons';
import SettingButtons from './SettingButtons/SettingButtons';
import { useDispatch } from 'react-redux'
import {
    handleGrid,
    handleRunning,
    newCellGrid,
    handleSpeed,
    drawOscillators,
    playSimulation
} from "../../app/gameOfLife/gameOfLifeSlice";

export default function GamePanel({ gameConfig, running, generations }) {


    const dispatch = useDispatch();

    useInterval(() => dispatch(playSimulation()), running ? gameConfig.speed : null)

    return (
        <Flex justifyContent="center" h="30vh">

            <Flex px="5" pb="1" bg="#F9E8B5"
                w={{ base: "100%", lg: "70vw" }} h="30vh"
                alignItems="center"
            >
                <ControlButtons
                    dispatch={dispatch}
                    running={running}
                    handleRunning={handleRunning}
                    playSimulation={playSimulation}
                    drawOscillators={drawOscillators}
                    newCellGrid={newCellGrid}
                />

                <SettingButtons
                    dispatch={dispatch}
                    running={running}
                    generations={generations}
                    handleRunning={handleRunning}
                    handleGrid={handleGrid}
                    handleSpeed={handleSpeed}
                    gameConfig={gameConfig} />

            </Flex>
        </Flex>
    )
}


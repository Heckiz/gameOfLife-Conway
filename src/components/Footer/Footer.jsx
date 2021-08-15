import { Text, Flex, keyframes, Box, HStack, Icon } from '@chakra-ui/react'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

import React from 'react'


export default function Footer() {

    const animateMobile = keyframes`
from {  transform: scale(0.9);}
to { transform: scale(1.0); }`

    return (
        <Flex justifyContent="center">
            <Box color="#FADBD8" bg="#1C2833" d="flex" justifyContent="center" w={{ base: "100vw", lg: "70vw" }} h="100%" overflow="hidden">
                <HStack animation={`${animateMobile} infinite 15s alternate`}
                    spacing="4rem" >
                    <Box
                        w="max-content" d="flex"
                        alignItems="center"
                    >
                        <Icon as={AiFillLinkedin} mr="1" fontSize={{base:"4xl", md:"xl"}} />
                        <Text
                            fontSize={{ base: "sm", md: "lg", lg: "xl" }}
                            d={{ base: "none", md: "block" }}
                            as="kbd">/fabo-romero</Text>

                    </Box>

                    <Box
                        w="max-content" d="flex"
                        alignItems="center"
                    >
                        <Icon as={AiFillGithub} mr="1" fontSize={{base:"3xl", md:"xl"}} />
                        <Text
                            fontSize={{ base: "sm", md: "lg", lg: "xl" }}
                            d={{ base: "none", md: "block" }}
                            as="kbd">/Heckiz</Text>

                    </Box>

                    <Box
                        w="max-content" d="flex"
                        alignItems="center"
                    >
                        <Icon as={AiFillMail} mr="1" fontSize={{base:"3xl", md:"xl"}} />
                        <Text
                            fontSize={{ base: "sm", md: "lg", lg: "xl" }}
                            d={{ base: "none", md: "block" }}
                            as="kbd">fabo.romero97@gmail.com</Text>

                    </Box>
                  

                </HStack >

            </Box>
        </Flex>
    )
}


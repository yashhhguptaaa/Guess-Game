import React from 'react'
import { Input, Box, Flex, Spacer, Select, Button, chakra } from "@chakra-ui/react";


export default function Homescreen() {
    return (
        <div>
            <Box bgGradient="linear(to-t, gray.200, gray.500)" boxShadow="dark-lg" p="5" maxW="500px" borderWidth="5px" alignContent="center" m="auto" mt="40px" mb="40px">
                <chakra.h1 fontSize="48px" fontWeight= "bold">Are You Excited For The Game🥳🥳🥳</chakra.h1>
                <Button
                    colorScheme="teal" variant="outline"
                >
                    Let's Guess
                </Button>
            </Box>
        </div>
    )
}

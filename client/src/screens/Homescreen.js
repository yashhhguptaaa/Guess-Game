import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Box, Flex, Spacer, Select, Button, chakra } from "@chakra-ui/react";
import { getrandomword } from '../actions/wordActions';

export default function Homescreen() {

    const dispatch = useDispatch()
    function getword(){
        dispatch(getrandomword());
    }

    return (
        <div>
            <Box bgGradient="linear(to-t, gray.200, gray.500)" boxShadow="dark-lg" p="5" maxW="500px" borderWidth="5px" alignContent="center" m="auto" mt="40px" mb="40px">
                <chakra.h1 fontSize="48px" fontWeight= "bold">Are You Excited For The Game🥳🥳🥳</chakra.h1>
                <Button
                    colorScheme="teal" variant="outline" onClick={getword}
                >
                    Let's Guess
                </Button>
            </Box>
        </div>
    )
}

import React, { useState , useContext , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Box, Flex, Spacer, Select, Button, chakra } from "@chakra-ui/react";
import { getrandomword, getwordsaction } from '../actions/wordActions';
import { GameContext } from '../GameContext';
import Gamescreen from './Gamescreen';



export default function Homescreen() {

    const [name, setName] = useState('')
    const { give_name , setGive_name, guess_name , setGuess_name , putguess_name, putgive_name} = useContext(GameContext)

    const dispatch = useDispatch()
    function  getword () {
        console.log("Give")
        putgive_name(name)
        console.log(give_name)
        dispatch(getwordsaction());
        dispatch(getrandomword());
        
        
    }

    function guessword() {
        console.log("guessword:" , name)
        putguess_name(name)
        
        window.open('/games', "_blank");
    }

    return (
        <div>
            <Box bgGradient="linear(to-t, gray.200, gray.500)" boxShadow="dark-lg" p="5" maxW="700px" borderWidth="5px" alignContent="center" m="auto" mt="40px" mb="40px">
                <chakra.h1 fontSize="48px" fontWeight="bold">Are You Excited For The Game🥳🥳🥳</chakra.h1>
                <Input variant="filled" value={name} onChange={(e) => setName(e.target.value)} maxW="400px" placeholder="Write your name here" mb="20px" mt="50px"/>
                <Flex >
                    <Button
                        colorScheme="teal" variant="outline" ml="230px" onClick= {guessword}
                    >
                        Guess
                    </Button>
                    <Button
                        colorScheme="teal" variant="outline" ml="50px" onClick={getword}
                    >
                        Give
                    </Button>
                </Flex>

            </Box>
        </div>
    )
}

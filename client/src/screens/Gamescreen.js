import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Text, Image, Input, Box, Flex, Spacer, Select, Button, chakra } from "@chakra-ui/react";
import { FramerTreeLayoutContext } from 'framer-motion';

export default function Gamescreen() {

    const wordstate = useSelector(state => state.getwordReducer)
    const { currentWord } = wordstate;

    const [guessword, setuessword] = useState('')
    const [check , setCheck] = useState('')

    function nowCheck(){
        if(guessword.toLowerCase() == currentWord[0].word){
            setCheck('Congrats !! You guess the word right')
        }
        else{
            setCheck(`Nope !! The word is not ${guessword}`)
        }
    }
    return (
        <div>
            <Box bgGradient="linear(to-t, gray.200, gray.500)" boxShadow="dark-lg" p="5" maxW="800px" borderWidth="5px" alignContent="center" m="auto" mt="40px" mb="40px">
                <chakra.h1 fontSize="38px" mr="30px" fontWeight="bold">Your Hints</chakra.h1>


                <Flex ml="160px" mt="20px">
                    {currentWord && currentWord[0].hints.map((guess) => {
                        return <div>
                            <Image
                                borderRadius="full"
                                boxSize="100px"
                                src={`${guess.image}`}
                                m="auto"
                                mb="30px"
                                mr="60px"
                            />
                            <chakra.h1 fontSize="28px" mr="30px" fontWeight="bold">{guess.hint}</chakra.h1>
                        </div>

                    })}
                </Flex>

                <Flex>
                    <Input variant="filled" value={guessword} onChange={(e) => {setuessword(e.target.value)}} placeholder="Write your word here" maxW="350px" mr="30px" ml="150px" />
                    <Button colorScheme="teal" variant="outline" onClick={nowCheck}>
                        Guess
                    </Button>
                </Flex>
                <chakra.h1 fontSize="28px" mr="30px" fontWeight="bold">{check}</chakra.h1>
            </Box>
        </div>
    )
}

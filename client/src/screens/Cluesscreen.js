import React, { useState , useContext , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Image, Container, Input, Box, Flex, Spacer, Select, Button, chakra } from "@chakra-ui/react";
import { getrandomword, getwordsaction } from '../actions/wordActions';
import { GameContext } from '../GameContext';


export default function Cluesscreen() {

    const dispatch = useDispatch()
    const guessword = JSON.parse(localStorage.getItem("GuessWord"));
    // useEffect(() => {
    //     dispatch(getrandomword());
    // }, [])
    const wordstate = useSelector(state => state.getwordReducer)
    const { Words } = wordstate;
    const guesswordstate = useSelector(state => state.getrandomwordReducer)
    const { Word } = guesswordstate;
    const {clues, setClues ,addClue } = useContext(GameContext);
    const give_name = JSON.parse(localStorage.getItem('give_name'))
    

    

    

    

    function putclues(guess) {
        addClue(guess) 
    }

    return (
        <div>
             <chakra.h1 fontSize="28px" mr="30px" mb="20px" fontWeight="bold">Hello {give_name}</chakra.h1>

            <Flex>
            <Box bgGradient="linear(to-t, gray.200, gray.500)" boxShadow="dark-lg" p="5" maxW="800px" borderWidth="5px" ml="30px" mt="40px" mb="40px">
                <chakra.h1 fontSize="38px" mr="30px" fontWeight="bold">Words For Clue</chakra.h1>


                <Grid  templateColumns="repeat(3, 1fr)">
                    {Words && Words.map((guess) => {
                        return <div onClick={() => putclues(guess)}>
                            <Image
                                borderRadius="full"
                                boxSize="100px"
                                src={`${guess.image}`}
                                m="auto"
                                mb="1px"
                                mr="60px"
                            />
                            <chakra.h1 fontSize="28px" mr="30px" mb="20px">{guess.word}</chakra.h1>
                        </div>

                    })}
                </Grid>
            </Box>
            <Container>
            {/* <chakra.h2 fontSize="28px" mr="30px" >{Word.word}</chakra.h2> */}
            {guessword && <chakra.h2 boxShadow="dark-lg" maxW="200px" mt ="40px" fontSize="28px" ml="150px" fontWeight="bold">Word : {guessword[0].word}</chakra.h2> }


            
            <Box bgGradient="linear(to-t, gray.200, gray.500)" maxH="200px" boxShadow="dark-lg" p="5" maxW="300px" borderWidth="5px" ml="100px" mt="40px" mb="40px">

            <chakra.h2 fontSize="28px" mr="30px" fontWeight="bold">Your Clues</chakra.h2>
                { clues && clues.map((clue) =>{
                    return <Container ml="10px">
                        <chakra.h2 fontSize="28px" mr="30px" >{clue.word}</chakra.h2>
                    </Container>
                })}
            </Box>
            </Container>
            </Flex>
        </div>
    )
}

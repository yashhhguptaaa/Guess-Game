import React, { useState , useContext , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Text, Image, Input, Box, Flex, Spacer, Select, Button, chakra } from "@chakra-ui/react";
import { FramerTreeLayoutContext } from 'framer-motion';
import { GameContext } from '../GameContext';

export default function Gamescreen({name}) {

    const wordstate = useSelector(state => state.getwordReducer)
    const { currentWord } = wordstate;

    // const { clues , setClues} = useContext(GameContext)
    // console.log("Clues",clues)

    const clues = JSON.parse(localStorage.getItem("currentClues"))
    console.log("Clues", clues)
    

    const [guessword, setuessword] = useState('')
    const [check , setCheck] = useState('')

    const checkword = JSON.parse(localStorage.getItem("GuessWord"));
    const guess_name = JSON.parse(localStorage.getItem('guess_name'))



    useEffect(() => {
        // window.location.reload();

    }, [])

    function nowCheck(){
        if(guessword.toLowerCase() == checkword[0].word){
            setCheck('Congrats !! You guess the word right')
        }
        else{
            setCheck(`Nope !! The word is not ${guessword}`)
        }
    }
    return (
        <div>
                        <chakra.h2 fontSize="28px" mr="120px" >Hello {guess_name}</chakra.h2>

            <Box bgGradient="linear(to-t, gray.200, gray.500)" boxShadow="dark-lg" p="5" maxW="800px" borderWidth="5px" alignContent="center" m="auto" mt="40px" mb="40px">
                <chakra.h1 fontSize="38px" mr="30px" fontWeight="bold">Your Hints</chakra.h1>


                <Flex ml="160px" mt="20px">
                { clues && clues.map((clue) =>{
                    return <Container ml="-60px">
                        <Image
                                borderRadius="full"
                                boxSize="100px"
                                src={`${clue.image}`}
                                m="auto"
                                mb="1px"
                                mr="150px"
                            />
                        <chakra.h2 fontSize="28px" mr="120px" >{clue.word}</chakra.h2>
                    </Container>
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

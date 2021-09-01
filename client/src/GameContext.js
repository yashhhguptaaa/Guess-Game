import React , { useState , createContext , useEffect} from 'react';

const GameContext = createContext();

const GameProvider = ({children}) => {

    const [ clues , setClues ] = useState([]);

    const [ give_name , setGive_name] = useState('');
    const [ guess_name , setGuess_name] = useState('');
    

    console.log("log from give context", give_name)



    const addClue = (clue) => {
        const updatedClues = [...clues, clue]
              
        localStorage.setItem('currentClues',JSON.stringify(updatedClues))
        setClues(updatedClues)
    }

    const putgive_name = (name) => {
        const updatedname = name
              
        localStorage.setItem('give_name',JSON.stringify(updatedname))
        setGive_name(updatedname)
    }

    const putguess_name = (name) => {
        const updatedname = name
              
        localStorage.setItem('guess_name',JSON.stringify(updatedname))
        setGuess_name(updatedname)
    }
    


    return (
        <GameContext.Provider value={{
            clues,
            setClues,
            give_name , setGive_name,
            guess_name , setGuess_name,
            addClue,
            putgive_name,
            putguess_name
            }}>
            {children}
        </GameContext.Provider>
    );
}

export { GameProvider , GameContext };
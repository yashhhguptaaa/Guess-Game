import axios from "axios";

export const getwordsaction = () => async (dispatch,getdata) => {

    dispatch({type : 'GET_WORDS_REQUEST'});

    try {
        console.log("Inside Post")
        const response = await axios.get('/api/words/getwords');
        console.log(response);
        dispatch({type : 'GET_WORDS_SUCCESS',payload:response.data})

        const currentWord = getdata().getwordReducer.Words;
        console.log(currentWord);
        localStorage.setItem('currentWord',JSON.stringify(currentWord));
        

    } catch (error) {
        
        dispatch({type : 'GET_WORDS_FAILED' , payload : error});

    }

}

export const getrandomword = () => async (dispatch,getdata) => {

    dispatch({type : 'GET_RANDOM_WORD_REQUEST'});

    try {
        console.log("Inside Post")
        const response1 = await axios.get('/api/guess/getguess');
        console.log(response1);
        dispatch({type : 'GET_RANDOM_WORD_SUCCESS',payload:response1.data})

        // const GuessWord = getdata().getrandomwordReducer.GuessWord;
        // console.log("Guess me: ",GuessWord);
        localStorage.setItem('GuessWord',JSON.stringify(response1.data));
        window.location.href='/clues'

    } catch (error) {
        
        dispatch({type : 'GET_RANDOM_WORD_FAILED' , payload : error});

    }

}
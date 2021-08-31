import axios from "axios";

export const getrandomword = () => async (dispatch,getdata) => {

    dispatch({type : 'GET_WORD_REQUEST'});

    try {
        console.log("Inside Post")
        const response = await axios.get('/api/words/getrandomword');
        console.log(response);
        dispatch({type : 'GET_WORD_SUCCESS',payload:response.data})

        const currentWord = getdata().getwordReducer.user;
        localStorage.setItem('currentWord',JSON.stringify(currentWord));
        window.location.href='/games'

    } catch (error) {
        
        dispatch({type : 'GET_WORD_FAILED' , payload : error});

    }

}
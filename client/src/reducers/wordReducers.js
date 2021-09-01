export const getwordReducer = (state={},action) => {

    switch(action.type){
        case 'GET_WORDS_REQUEST' : return{
            editloading : true,
            ...state
        }
        case 'GET_WORDS_SUCCESS' : return{
            editloading:false,
            editsuccess:true,
            Words : action.payload
        }
        case 'GET_WORDS_FAILED' : return{
            editerror : action.payload,
            editloading:false
        }
        default : return state
    }

}

export const getrandomwordReducer = (state={},action) => {

    switch(action.type){
        case 'GET_RANDOM_WORD_REQUEST' : return{
            editloading : true,
            ...state
        }
        case 'GET_RANDOM_WORD_REQUEST' : return{
            editloading:false,
            editsuccess:true,
            GuessWord : action.payload
        }
        case 'GET_RANDOM_WORD_REQUEST' : return{
            editerror : action.payload,
            editloading:false
        }
        default : return state
    }

}
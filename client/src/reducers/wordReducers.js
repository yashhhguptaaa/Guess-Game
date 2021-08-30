export const getwordReducer = (state={},action) => {

    switch(action.type){
        case 'GET_WORD_REQUEST' : return{
            editloading : true,
            ...state
        }
        case 'GET_WORD_SUCCESS' : return{
            editloading:false,
            editsuccess:true,
            currentWord : action.payload
        }
        case 'GET_WORD_FAILED' : return{
            editerror : action.payload,
            editloading:false
        }
        default : return state
    }

}
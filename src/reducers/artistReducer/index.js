import {ARTIST_SET_DATA,ARTIST_SET_ERROR,ARTIST_SET_LOADING} from "./action-types";

const initialState = {
    data:null,
    loading:true,
    error:false,
}

const artistReducer = (state = initialState,action) => {
    switch (action.type) {

        case ARTIST_SET_DATA: {
            return {
                ...state,
                data:action.payload
            }
        }

        case ARTIST_SET_ERROR:{
            return {
                ...state,
                error:action.payload,
            }
        }

        case ARTIST_SET_LOADING:{
            return {
                ...state,
                loading:action.payload
            }
        }


        default: {
            return state;
        }
    }
}

export default artistReducer;
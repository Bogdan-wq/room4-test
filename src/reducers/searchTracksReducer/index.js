import {
    SEARCH_TRACKS_SET_INPUT,
    SEARCH_TRACKS_SET_DATA,
    SEARCH_TRACKS_SET_ERROR,
    SEARCH_TRACKS_SET_LOADING
} from "./action-types";

const initialState = {
    data:null,
    error:false,
    loading:false,
    input:'',
}


const searchTracksReducer = (state = initialState,action) => {
    switch (action.type) {
        case SEARCH_TRACKS_SET_LOADING:{
            return {...state,loading:action.payload}
        }
        case SEARCH_TRACKS_SET_ERROR:{
            return {...state,error:action.payload}
        }
        case SEARCH_TRACKS_SET_DATA:{
            return {...state,data:action.payload}
        }
        case SEARCH_TRACKS_SET_INPUT:{
            return {...state,input:action.payload}
        }
        default:{
            return state;
        }
    }
}

export default searchTracksReducer;
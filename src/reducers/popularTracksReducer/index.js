import {TOP_TRACKS_SET_DATA, TOP_TRACKS_SET_ERROR, TOP_TRACKS_SET_LOADING} from "./action-types";

const initialState = {
    data:null,
    loading:false,
    error:false,
}

const popularTracksReducer = (state = initialState,action) => {
    switch (action.type) {

        case TOP_TRACKS_SET_DATA: {
            return {
                ...state,
                data:action.payload
            }
        }

        case TOP_TRACKS_SET_ERROR:{
            return {
                ...state,
                error:action.payload,
            }
        }

        case TOP_TRACKS_SET_LOADING:{
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

export default popularTracksReducer;
import {
    SEARCH_TRACKS_SET_DATA,
    SEARCH_TRACKS_SET_INPUT,
    SEARCH_TRACKS_SET_ERROR,
    SEARCH_TRACKS_SET_LOADING,
} from "./action-types";
import {searchTracksAPI} from "../../api";


const searchTracksSetLoading = (loading) => {
    return {
        type:SEARCH_TRACKS_SET_LOADING,
        payload:loading
    }
}

const searchTracksSetError = (error) => {
    return {
        type:SEARCH_TRACKS_SET_ERROR,
        payload:error
    }
}

const searchTracksSetData = (data) => {
    return {
        type:SEARCH_TRACKS_SET_DATA,
        payload:data,
    }
}

const searchTracksSetInput = (inputValue) => {
    return {
        type:SEARCH_TRACKS_SET_INPUT,
        payload:inputValue,
    }
}



const setInput = (value) => (dispatch) => {
    dispatch(searchTracksSetInput(value))
}

const searchTracks = (value) => (dispatch) => {
    dispatch(searchTracksSetLoading(true))
    dispatch(searchTracksSetError(false))
    dispatch(searchTracksSetData(null))
    return searchTracksAPI(value)
        .then(res => {
            dispatch(searchTracksSetLoading(false))
            if(res.results && res.results.trackmatches && res.results.trackmatches.track) {
                dispatch(searchTracksSetData(res.results.trackmatches.track))
            } else {
                dispatch(searchTracksSetData([]))
            }
        })
        .catch(() => {
            dispatch(searchTracksSetLoading(false))
            dispatch(searchTracksSetError(true))
        })
}

const resetSearchTracks = (dispatch) => {
    dispatch(searchTracksSetData(null))
}

export {
    setInput,
    searchTracks,
    resetSearchTracks,
}
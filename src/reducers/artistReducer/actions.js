import {
    ARTIST_SET_LOADING,
    ARTIST_SET_ERROR,
    ARTIST_SET_DATA,
} from "./action-types";
import {getArtistAPI} from "../../api";


const artistSetLoading = (loading) => {
    return {
        type:ARTIST_SET_LOADING,
        payload:loading
    }
}

const artistSetError = (error) => {
    return {
        type:ARTIST_SET_ERROR,
        payload:error
    }
}

const artistSetData = (data) => {
    return {
        type:ARTIST_SET_DATA,
        payload:data,
    }
}



const getArtist = (id) => (dispatch) => {
    dispatch(artistSetLoading(true))
    return getArtistAPI(id)
        .then(res => {
            dispatch(artistSetLoading(false))
            dispatch(artistSetData(res.artist));
        })
        .catch(() => {
            dispatch(artistSetLoading(false))
            dispatch(artistSetError(true))
        })
}

const resetArtist = (dispatch) => {
    dispatch(artistSetData(null));
}

export {
    getArtist,
    resetArtist,
}


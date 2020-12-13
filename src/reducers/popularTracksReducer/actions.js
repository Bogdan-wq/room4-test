import {
    TOP_TRACKS_SET_LOADING,
    TOP_TRACKS_SET_ERROR,
    TOP_TRACKS_SET_DATA
} from "./action-types";
import {getPopularTracksAPI} from "../../api";
import transformPopularTracks from "../../helpers/transformPopularTracks";


const topTracksSetLoading = (loading) => {
    return {
        type:TOP_TRACKS_SET_LOADING,
        payload:loading
    }
}

const topTracksSetError = (error) => {
    return {
        type:TOP_TRACKS_SET_ERROR,
        payload:error
    }
}

const topTracksSetData = (data) => {
    return {
        type:TOP_TRACKS_SET_DATA,
        payload:data,
    }
}


const getPopularTracks = (dispatch) => {
    dispatch(topTracksSetLoading(true))
    return getPopularTracksAPI()
        .then(res => {
            dispatch(topTracksSetLoading(false))
            dispatch(topTracksSetData(transformPopularTracks(res.tracks.track)));
        })
        .catch(() => {
            dispatch(topTracksSetLoading(false))
            dispatch(topTracksSetError(true))
        })
}


const resetPopularTracks = (dispatch) => {
    dispatch(topTracksSetData(null));
}

export {getPopularTracks,resetPopularTracks};
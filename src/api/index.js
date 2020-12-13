import apiKey from "../constants/api";

const getPopularTracksAPI = () => {
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${apiKey}&format=json`)
        .then(res => res.json())
}

const getArtistAPI = (id) => {
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&mbid=${id}&api_key=${apiKey}&format=json`)
        .then(res => res.json())
}

const searchTracksAPI = (value) => {
    return fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${value}&api_key=${apiKey}&format=json`)
        .then(res => res.json())
}

export {
    getPopularTracksAPI,
    getArtistAPI,
    searchTracksAPI,
}
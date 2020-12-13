const transformSearchedTracks = (searchedTracks) => {
    return searchedTracks.map(searchTrack => {
        return {
            name:searchTrack.name,
            artist:searchTrack.artist,
        }
    })
}

export default transformSearchedTracks;

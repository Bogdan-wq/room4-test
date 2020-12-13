const transformPopularTracks = (popularTracks) => {
    return popularTracks.map(popularTrack => {
        return {
            name:popularTrack.name,
            artist:popularTrack.artist,
            image:popularTrack.image.find(imageItem => imageItem.size === "extralarge")['#text'],
        }
    })
}

export default transformPopularTracks;
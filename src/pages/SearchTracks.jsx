import React, {useEffect, useRef} from "react";
import {MDBBox, MDBContainer, MDBInput, MDBListGroup} from "mdbreact";
import {useDispatch, useSelector} from "react-redux";
import {searchTracks, setInput,resetSearchTracks} from "../reducers/searchTracksReducer/actions";
import SearchTrack from "../components/SearchedTrack";
import OptionalData from "../components/common/OptionalData";

const SearchTracksPage = () => {

    const dispatch = useDispatch();
    const timeoutRef = useRef();
    const loading = useSelector(s => s.searchTracks.loading)
    const error = useSelector(s => s.searchTracks.error);
    const neededTracks = useSelector(s => s.searchTracks.data);
    const inputValue = useSelector(s => s.searchTracks.input)

    useEffect(() => {
        dispatch(searchTracks(inputValue))
        return () => {
            dispatch(setInput(''))
            dispatch(resetSearchTracks)
        }
    },[])

    const handleChangeInput = (e) => {
        dispatch(setInput(e.target.value))
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
            dispatch(searchTracks(e.target.value))
        },600)
    }

    return (
        <MDBContainer>
            <MDBBox className="w-50 mx-auto">
                <MDBInput label="Search for tracks..."
                          onChange={handleChangeInput}
                          value={inputValue} />
                <OptionalData {...{loading,error}} data={neededTracks}>
                    {neededTracks => (
                        <MDBListGroup>
                            {neededTracks.map((track) => <SearchTrack key={`${track.artist} ${track.name}`} {...track} />)}
                        </MDBListGroup>
                    )}
                </OptionalData>
            </MDBBox>
        </MDBContainer>
    )
}

export default SearchTracksPage;
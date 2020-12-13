import React, {useEffect} from 'react';
import {MDBBox, MDBContainer,MDBTypography} from "mdbreact";
import {useDispatch, useSelector} from "react-redux";
import {resetPopularTracks,getPopularTracks} from "../reducers/popularTracksReducer/actions";
import PopularTrack from "../components/PopularTrack";
import OptionalData from "../components/common/OptionalData";

const MainPage = () => {

    const dispatch = useDispatch();
    const loading = useSelector(s => s.popularTracks.loading)
    const error = useSelector(s => s.popularTracks.error)
    const popularTracks = useSelector(s => s.popularTracks.data)

    useEffect(() => {
        dispatch(getPopularTracks)
        return () => {
            dispatch(resetPopularTracks)
        }
    },[])


    return (
        <MDBContainer>
            <MDBBox>
                <MDBTypography tag="h1" variant="display-4">Main Page</MDBTypography>
            </MDBBox>
            <OptionalData {...{error,loading}} data={popularTracks}>
                {popularTracks => (
                    popularTracks.map(popularTrack => <PopularTrack {...popularTrack} key={popularTrack.name}/>)
                )}
            </OptionalData>
        </MDBContainer>
    )
}

export default MainPage;
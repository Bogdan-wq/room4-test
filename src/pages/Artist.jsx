import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {MDBBox, MDBContainer, MDBTypography} from "mdbreact";
import {useDispatch, useSelector} from "react-redux";
import {getArtist, resetArtist} from "../reducers/artistReducer/actions";
import OptionalData from "../components/common/OptionalData";

const ArtistPage = (props) => {

    const {artistId} = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(s => s.artist.loading)
    const error = useSelector(s => s.artist.error)
    const artist = useSelector(s => s.artist.data)

    useEffect(() => {
        dispatch(getArtist(artistId))
        return () => {
            dispatch(resetArtist);
        }
    },[])

    return (
        <MDBContainer>
            <MDBBox>
                <OptionalData {...{error,loading}} data={artist}>
                    {artist => (
                        <>
                            <MDBTypography tag="h1" variant="display-4">{artist.name} Page</MDBTypography>
                            <img className="img-fluid" src={artist.image[2]['#text']} alt="Artist" />
                            <MDBBox className="mt-3">
                                <MDBBox>
                                    <span className="font-weight-bold">Tags:</span>
                                    <MDBBox>
                                        {artist.tags.tag.map(tag => (
                                            <MDBBox key={tag.name}>{tag.name}: <a href={tag.url}>{tag.url}</a></MDBBox>
                                    ))}
                                    </MDBBox>
                                 </MDBBox>
                            </MDBBox>
                            <MDBBox className="mt-2">
                                <MDBBox>
                                    <span className="font-weight-bold text-left">Description: </span>{artist.bio.content}
                                </MDBBox>
                            </MDBBox>
                        </>
                    )}
                </OptionalData>
            </MDBBox>
        </MDBContainer>
    )
}

export default ArtistPage;
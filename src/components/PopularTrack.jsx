import React from 'react';
import PropTypes from 'prop-types';
import {MDBRow, MDBCol, MDBView, MDBMask,} from "mdbreact";
import {Link} from "react-router-dom";

const PopularTrack = (props) => {

    const {
        name,
        artist : { name : artistName,mbid },
        image,
    } = props;


    return (
        <MDBRow className="mb-4">
            <MDBCol lg="3">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                    <img className="img-fluid" src={image} alt=""/>
                    <MDBMask overlay="white-slight" />
                </MDBView>
            </MDBCol>
            <MDBCol lg="9">
                <h3 className="font-weight-bold mb-3 p-0">
                    {name}
                </h3>
                <div>
                    <span>Artist: <Link to={`/artist/${mbid}`}>{artistName}</Link></span>
                </div>
            </MDBCol>
        </MDBRow>
    )
}


PopularTrack.propTypes = {
    name:PropTypes.string,
    artist:PropTypes.shape({
        name:PropTypes.string,
        mbid:PropTypes.string,
    }),
    image:PropTypes.string,
}

export default PopularTrack;
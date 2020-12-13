import React from 'react';
import PropTypes from 'prop-types';
import {MDBListGroupItem} from "mdbreact";

const SearchTrack = (props) => {

    const {
        name,
        artist,
    } = props

    return (
        <MDBListGroupItem key={`${artist} ${name}`}>
            <span>{artist} - </span>
            <span>{name}</span>
        </MDBListGroupItem>
    )
}

SearchTrack.propTypes ={
    artist:PropTypes.string,
    name:PropTypes.string,
}

export default SearchTrack;
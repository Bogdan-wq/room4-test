import React from 'react';
import {MDBBox} from "mdbreact";

const NoItems = () => {
    return (
        <MDBBox display="flex" justifyContent="center">
            <p className="lead">No objects matching the term</p>
        </MDBBox>
    )
}

export default NoItems;
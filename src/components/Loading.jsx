import React from "react";
import {MDBBox} from "mdbreact";

const Loading = () => {
    return (
        <MDBBox display="flex" justifyContent="center" alignItems="center" flex="column">
            <div className="spinner-border" role="status" />
            <MDBBox className="mt-2">Loading...</MDBBox>
        </MDBBox>
    )
}

export default Loading;
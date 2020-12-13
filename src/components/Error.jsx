import React from "react";
import {MDBBox} from "mdbreact";

const Error = () => {
    return (
        <MDBBox display="flex" justifyContent="center">
            <p className="text-danger lead">Something goes wrong with requesting data</p>
        </MDBBox>
    )
}

export default Error;
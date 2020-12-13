import React from 'react';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav,MDBNavItem,MDBNavLink} from "mdbreact";


const Header = () => {
    return (
        <MDBNavbar color="blue accent-4" fixed="top">
            <MDBNavbarBrand>
                <div className="white-text">ROOM4 TEST</div>
            </MDBNavbarBrand>
            <MDBNavbarNav className="d-flex flex-row" left>
                <MDBNavItem active>
                    <MDBNavLink className="text-white px-2" to="/">Main</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="px-2">
                    <MDBNavLink className="text-white px-2" to="/search-tracks">Search Track Page</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
    )
}

export default Header;
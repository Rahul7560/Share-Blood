import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import './css/Navbar.css'


class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar className="navbars py-2 " dark expand="md" >
                <div className="navbarbs " >
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" className="navbaritem" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav >
                            <MDBNavItem >

                                <MDBNavLink className="MDBNavLink" exact={true} to="">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="MDBNavLink" to="/About">About</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="MDBNavLink" to="/Donation">Donation</MDBNavLink>

                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="MDBNavLink" to="/Contact">Contact</MDBNavLink>
                            </MDBNavItem>


                        </MDBNavbarNav>

                    </MDBCollapse>
                </div>


            </MDBNavbar>
        );
    }
}

export default NavbarPage;
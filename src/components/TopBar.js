import React, {Component} from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import feather_pen from "./feather_pen.svg"
class TopBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <img src={feather_pen} className="profile-pic" alt="Fernando Simon"/>
                        <span>Crosstown</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/posts/">Posts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/resume/fernando.pdf">Resume</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about/">About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default TopBar;
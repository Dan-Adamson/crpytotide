import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavLink} from 'reactstrap';
import { Link } from 'react-router-dom';


export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar style={{ backgroundColor: "#121212" }}  expand="md">
            <NavbarBrand style={{ fontWeight: "bold", color:"#BB86FC" }}  tag={Link} to="/">CryptoTide</NavbarBrand>
            <NavLink style={{ color: "white", }} tag={Link} to="/about">About</NavLink>
        </Navbar>;
    }
}
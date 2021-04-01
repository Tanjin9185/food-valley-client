import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
const Header = () => {
    const [loggedinUser, setLoggedinUser] =useContext(UserContext);

console.log(loggedinUser);

    return (
        <>

            <Navbar collapseOnSelect expand="lg" >
                <Navbar.Brand ><img style={{ height: "60px" }} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                        <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                        <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
                        <Nav.Link as={Link} to="/signin">
        
        
                        {loggedinUser.displayName ? loggedinUser.displayName :"Login"}


      </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;
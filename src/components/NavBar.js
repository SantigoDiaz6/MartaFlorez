import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const navBar = (props) => {

  const token = props.token;

  //handleSignUp = 


  return (
    // <header className="navbar">
    //   <a href="/home" className="logo">MF</a>
    //   {/* <input class="menuButton" type="checkbox" id="menuButton" /> */}
    //   <label className="menuIcon" htmlFor="menuButton"><span className="navIcon"></span></label>
    //     <ul className="menu">
    //     <div className="left">

    //       <li><a href="/aboutus">About Us</a></li>
    //       <li><a href="/services">Services</a></li>
    //       <li><a href="/contact">Contact</a></li>
    //     </div>
    //     <div className="right">
    //   {!token ?  (
    //       <React.Fragment>    
    //       <Link to='/login'><li>Sign In</li></Link>
    //       <Link to='/signup'><li>Sign Up</li></Link>
    //     </React.Fragment> 
    //       ) : (
    //         <React.Fragment>
    //          <Link to='/signout'> <li>Sign Out</li></Link>
    //         </React.Fragment> 
    //         ) 
    //   }
    //   </div>
    //   </ul>
    // </header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home">Marta Florez</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {!token ? (
          <React.Fragment>
            <Link className="btn btn-outline-secondary mr-1" to="/login" >Sign In</Link>
            <Link className="btn btn-outline-secondary" to="/signup">Sign Up</Link>
          </React.Fragment>
        ) : (
            <React.Fragment>
              <Link className="btn btn-outline-secondary" to="/signout">Sign Out</Link>
            </React.Fragment>
          )
        }
      </Navbar.Collapse>
    </Navbar>
  )
}



export default navBar;
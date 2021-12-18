import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar, Nav, Container} from "react-bootstrap";



function Navbarcomp() {
    return (
      
    <div>
      <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#"><h4>Data Table</h4></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
              <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
              >
              <Nav.Link as={Link} to={"/home"}><h4>Home</h4></Nav.Link>
              <Nav.Link as={Link} to={"/commentlist"}><h4>Table</h4></Nav.Link>
              </Nav>
    
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </div>
        
    )
}

export default Navbarcomp

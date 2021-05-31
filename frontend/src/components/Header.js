import React from 'react'
import { Navbar,Nav,Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>

                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Container to="/cart">
                        <Nav.Link ><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                        </Container>
                        <Container to="/login">
                        <Nav.Link ><i className="fas fa-user"></i> Login</Nav.Link>
                        </Container>
                        </Nav>
  </Navbar.Collapse>
                </Container>
</Navbar>
        </header>
    )
}

export default Header

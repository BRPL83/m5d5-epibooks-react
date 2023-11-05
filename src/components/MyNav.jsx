import { Navbar, Nav, Container, Form } from 'react-bootstrap'

const MyNav = ({ searchQuery, setSearchQuery }) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
        
            <Container fluid>
                <Navbar.Brand href="#">EPIBOOKS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                         <Nav.Link href="#link">Browse</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Form.Group>
                            <Form.Control
                             type="search"
                             placeholder="Find the book"
                             value={searchQuery}
                             onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </Form.Group>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav;
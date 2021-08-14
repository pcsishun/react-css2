import {Navbar,Container, Nav}  from 'react-bootstrap';
import {Link} from 'react-router-dom'

const NavMenu = () =>{
    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">REACT</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/learn">LearnCSS</Nav.Link>
          <Nav.Link href="/react">React page</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </>
    )
}

export default NavMenu;
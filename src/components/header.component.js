import {Navbar,Nav, Container} from "react-bootstrap"

import {NavLink} from "react-router-dom"
const HeaderComponent = ()=>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Admin</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/home"  >Home</NavLink>
            <NavLink className="nav-link" to="/login" >Login</NavLink>
            <NavLink className="nav-link" to="/register"  >Register</NavLink>
            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
          </Nav>
        </Container>
      </Navbar>


    )
}
export default HeaderComponent;
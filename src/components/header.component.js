import {Navbar,Nav, Container} from "react-bootstrap"

import {NavLink, useNavigate} from "react-router-dom"
const HeaderComponent = ()=>{
  let user = localStorage.getItem("user");
  let navigate = useNavigate();
  if(user){
    user = JSON.parse(user);
  }

  const logout = (e)=>{
    e.preventDefault();
    localStorage.clear();
    navigate("/login")
  }
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Admin</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/home"  >Home</NavLink>
            
            {
              user ? <></>: <><NavLink className="nav-link" to="/login" >Login</NavLink>
              <NavLink className="nav-link" to="/register"  >Register</NavLink>
              </>
            }
            
            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>

          </Nav>
          
      {
        user ? <Nav>
          <NavLink className="nav-link" to ="/">
            {
              user.name
            }
          </NavLink>
          <NavLink className="nav-link" to= "/" onClick ={logout}>Logout</NavLink>
        </Nav>:<></>
      }
            
          
        </Container>
      </Navbar>


    )
}
export default HeaderComponent;
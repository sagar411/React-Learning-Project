import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import HeaderComponent from "../../components/header.component";
import { EmailInput, PasswordInput } from "../../components/input/input.component";
//validation
// // type 1--bad habit
// let [email, setEmail] = useState();
// let [password,setPassword] = useState();

const LoginPage = (props) => {

  //USE STATE CAN RECIEVE A PARAMETER
  let [data, setData] = useState({
    email: "",
    password: "",
    remember_me: false
  })

  const handleChange = (e)=>{
    //name,checked, selected,value 
    let {name,value} = e.target;
    setData({
      ...data,
      [name]:value
    })
  }
console.log(data)
  return (
    <>
      <HeaderComponent />
      <Container fluid>
        <Row>
          <Col sm={12} md={9} lg={{ offset: 3, span: 6 }} className="my-5">
            <h4 className="text-center">Login Page</h4>

            <hr />
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }} className="my-1">
            <Form>
              <EmailInput fieldname="UserName :" name="email" placeholder="enter your name" handleChange={handleChange} />
              
              <PasswordInput fieldname="password :" name = "password" placeholder="enter your password" handleChange = {handleChange}/> 
              


              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>{" "}
              or <a href="/register">Register Now</a>

              {/* <NavLink to="/register">Register</NavLink> */}
            </Form>
          </Col>
        </Row>
      </Container>

      {/* // <div className="container">

    //     LoginPage
    // </div> */}

    </>
  );
};

export default LoginPage;

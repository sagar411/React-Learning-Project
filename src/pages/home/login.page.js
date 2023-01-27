import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import HeaderComponent from "../../components/header.component";
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{
                  let {value}= e.target;
                  setData({
                    ...data,
                    email : value}
                    
                    )
                    
                }}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              {/* or <a>Register Now</a> */}
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

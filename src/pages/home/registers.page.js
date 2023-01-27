import { Container, Row, Col, Form, Button} from "react-bootstrap"

import {NavLink} from "react-router-dom"
import HeaderComponent from "../../components/header.component"
import { InputComponent } from "../../components/input/input.component"
const RegisterPage = () => {
    return (
        <>
        <HeaderComponent/>
            <Container fluid>
                <Row>
                    <Col sm={12} md={9} lg={{ offset: 3, span: 6 }} className="my-5">
                        <h4 className="text-center">Register Form</h4>

                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={{ offset: 3, span: 6 }} className="my-1">
                        <Form>
                            <InputComponent type= "text" fieldname="Name :" name="name" placeholder="EnterYour name" />
                       

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" size="sm" />
                                <Form.Text className="text-muted">

                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="role">
                            <Form.Label>Role</Form.Label>

                            <Form.Select aria-label="Default select example" size="sm" name="role" >
                            <option>Select a role</option>
                            <option value="admin">Admin</option>
                            <option value="seller">Seller</option>
                            <option value="customer">Customer</option>
                            </Form.Select>
                            </Form.Group>
                            
                            <Form.Group controlId="formFileSm" className="mb-3" >
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" size="sm" accept="image/*" name="image"/>
                             </Form.Group>

                            <Button variant="primary" type="submit" size="sm">
                                Submit
                            </Button>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            
                            or 
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <NavLink to="/login">Login</NavLink>
                            {/* <Link to="/login">login</Link> */}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default RegisterPage
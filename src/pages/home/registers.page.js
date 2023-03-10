import { Container, Row, Col, Form, Button, Toast } from "react-bootstrap"

import { NavLink } from "react-router-dom"
import HeaderComponent from "../../components/header.component"
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { postRequest } from "../../services/axios.services";
import { registerUser } from "../../services/user.service";
import {  useNavigate } from "react-router-dom";
const RegisterPage = () => {

    let registerSchema = Yup.object().shape({
        name: Yup.string()
            .required("name is required")
            .min(2, "name too short")
            .max(50, "name to long")
        ,
        email: Yup.string().email("invalid email format ").required("email  reduired"),
        password: Yup.string()
            .min(8, "Password should be atleast 8 charater long").required("PASSWORD IS REQUIRED"),
        role: Yup.string().required("Role is Reduiresd")
    })

    let navigate = useNavigate();
    const formik = useFormik(
        {
            initialValues: {
                name: "",
                email: "",
                password: "",
                role: "",
                image: "",

                //data 
            },
            validationSchema: registerSchema,
            onSubmit: async (values) => {
                
//await axios.post("http://localhost:3006/user", values ,{
//     headers :{
//         "Content-Type" :"multipart/form-data"
//     }
// } )  `
                try{
                    let registerd_user = await registerUser(values);
                        toast.success("User registerd successfully")
                    // if(registerd_user.data.status){
                    //     toast.success("Your Account has been created Successfully")
                    // }else{
                    //     toast.error("sorry there was problem while creating acount")
                    // }
                    // console.log("Response", response)
                   navigate("/login")
                    // setTimeout(()=>{
                    //     navigate("/login
                        
                        
                        
                        
                        
                        
                    //     ")
 
                    // },2000)
                                   }catch(error){
                    toast.error(error.message)
                    console.log("Errorr",error)
                }
               
                // CORS => Cross Origin Reference Site 
                //http://localhost:3000 ===> https://locahlhost:3005
                //we should accecpt cors from server

                /**
                 * config =>Object
                 * headers =>Object
                 * data =>{}=> API response
                 * status =>number http response
                 * statusText => String
                 * request => Object
                 */
            }

        }
    )
    return (
        <>
            <HeaderComponent />
            <ToastContainer/>
            <Container fluid>
                <Row>
                    <Col sm={12} md={9} lg={{ offset: 3, span: 6 }} className="my-5">
                        <h4 className="text-center">Register Form</h4>

                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={{ offset: 3, span: 6 }} className="my-1">
                        
                        
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group className="mb-3" controlId="name" >
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" onChange={formik.handleChange} required value={formik.values.name} placeholder="Enter your name" />
                                {
                                    formik.errors.name && formik.touched.name ? (
                                        <em className="text-danger">{formik.errors.name}</em>
                                    ) : null
                                }
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" onChange={formik.handleChange} required value={formik.values.email} placeholder="Enter email" size="sm" />
                                {
                                    formik.errors.email && formik.touched.email ? (
                                        <em className="text-danger">{formik.errors.email}</em>
                                    ) : null
                                }
                                <Form.Text className="text-muted">

                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label >Password</Form.Label>
                                <Form.Control type="password" name="password" required placeholder="enter password" onChange={formik.handleChange} value={formik.values.password} />
                                {
                                    formik.errors.password && formik.touched.password ? (
                                        <em className="text-danger">{formik.errors.password}</em>
                                    ) : null
                                }
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="role">
                                <Form.Label>Role</Form.Label>

                                <Form.Select aria-label="Default select example" size="sm" name="role" onChange={formik.handleChange} required value={formik.values.role} >
                                    <option>Select a role</option>
                                    <option value="admin">Admin</option>
                                    <option value="seller">Seller</option>
                                    <option value="customer">Customer</option>
                                </Form.Select>
                                {
                                    formik.errors.role && formik.touched.role ? (
                                        <em className="text-danger">{formik.errors.role}</em>
                                    ) : null
                                }
                            </Form.Group>

                            <Form.Group controlId="formFileSm" className="mb-3" >
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" size="sm" accept="image/*" name="image" />
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
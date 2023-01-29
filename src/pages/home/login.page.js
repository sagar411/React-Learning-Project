import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import HeaderComponent from "../../components/header.component";
import { EmailInput, PasswordInput } from "../../components/input/input.component";
import { toast,ToastContainer } from "react-toastify";
import { postRequest } from "../../services/axios.services";
import "react-toastify/dist/ReactToastify.css"; 

import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { createToken } from "../../config/helper";
//validation
// // type 1--bad habit
// let [email, setEmail] = useState();
// let [password,setPassword] = useState();

const LoginPage = (props) => {
  let navigate = useNavigate();
  //USE STATE CAN RECIEVE A PARAMETER
  let [data, setData] = useState({
    username: "",
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

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{  
      let response = await postRequest("/auth/login",data);
      if(response.result.token){
        //web store 
        /**
         * cookie --it has limitaion and fixed sized  only 200kb
        either we use session or local storage 
        * session storage--5MB DATA IF WE CLOSE IT WILL CLEAAR DATA
         * local storage --5MB DATA AND WE CAN USE IT ACROSS THE PATH
         */
        // document.cookie =
        localStorage.setItem("token", response.result.token);
        let user_info ={
          name:response.result.user.name,
          email:response.result.user.email,
          role: response.result.user.role,
          id:response.result.user._id
        }
      let user_data = JSON.stringify(user_info);

        localStorage.setItem("user",user_data);

        navigate("/"+ user_info.role)
        // sessionStorage.setItem("token", user.result.token);
        // let token = localStorage.getItem("token");
        // localStorage.removeItem("token");
        // sessionStorage.setItem("token",user.result.token);
      
      }

    }catch(err){
      toast.error(err.message);
    }
  }

  useEffect(()=>{
   let token = localStorage.getItem("token");
  let user = localStorage.getItem("user")
  if(token && user){

    user = JSON.parse(user);
    navigate("/"+user.role)
  } 
   
  },[])
// console.log(data)
  return (
    <>
      <HeaderComponent />
      <ToastContainer/>
      <Container fluid>
        <Row>
          <Col sm={12} md={9} lg={{ offset: 3, span: 6 }} className="my-5">
            <h4 className="text-center">Login Page</h4>

            <hr />
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={{ offset: 3, span: 6 }} className="my-1">
            <Form onSubmit={handleSubmit}>
              <EmailInput fieldname="UserName :" name="username" placeholder="enter your name" handleChange={handleChange} />
              
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

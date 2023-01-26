import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "../pages/home/home.page"; 
import LoginPage from "../pages/home/login.page";
import RegisterPage from "../pages/home/registers.page";
import ErrorPage from "../pages/home/error.page";
const Routing = ()=>{
    return(
        // same as react  fragment <></>
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>

                <Route path ="*" element={<ErrorPage/>}/>
            </Routes>

        </BrowserRouter>
            
        </>
        // <React.Fragment>

        // </React.Fragment>
        
    )

 }
 export default Routing;
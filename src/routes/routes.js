import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "../pages/home/home.page";
import LoginPage from "../pages/home/login.page";
import RegisterPage from "../pages/home/registers.page";
import ErrorPage from "../pages/home/error.page";
import AdminLayout from "../pages/cms/admin.pages";
import AdminDashboard from "../pages/cms/admin-dashboard-page";
import UserListPage from "../pages/cms/user-list.page";
import ProductDetail from "../pages/home/product-detail.page"

const PrivateComponent = ({component})=>{
    let is_logged_in = true;

    return(is_logged_in ?component :<Navigate to ="/login"/>)
}

const Routing = () => {
    return (
        // same as react  fragment <></>
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    
                    <Route  path="product/:slug" element = {<ProductDetail/>}/>
                    
                    <Route path="/admin" element={<PrivateComponent component={<AdminLayout />}/>}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="user" element = {<UserListPage tittle = "User List"/>}/>

                    </Route>
                    <Route path="*" element={<ErrorPage />} />
                </Routes>

            </BrowserRouter>

        </>
        // <React.Fragment>

        // </React.Fragment>

    )

}
export default Routing;
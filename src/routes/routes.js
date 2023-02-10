import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "../pages/home/home.page";
import LoginPage from "../pages/home/login.page";
import RegisterPage from "../pages/home/registers.page";
import ErrorPage from "../pages/home/error.page";
import AdminLayout from "../pages/cms/admin.pages";
import AdminDashboard from "../pages/cms/admin-dashboard-page";
import UserListPage from "../pages/cms/user-list.page";
import ProductDetail from "../pages/home/product-detail.page"
import { getRequest } from "../services/axios.services";
import { useState,useEffect } from "react";
import BannerListPage from "../pages/cms/banner-list.page";
import BannerCreatePage from "../pages/cms/banner-create.page";
import BannerEditPage from "../pages/cms/banner-edit.page";
import BrandListPage from "../pages/cms/brand/brand-list.page";
import BrandCreate from "../pages/cms/brand/brand-create.page";
import BrandEditPage from "../pages/cms/brand/brand-edit.page";
import CategoryListPage from "../pages/cms/category/category-list.page";

const PrivateComponent = ({component})=>{
    let is_logged_in = localStorage.getItem("token")
//     let [is_logged_in,setIsLoogedIn] = useState(false);
//   const getUser = async ()=>{
//     let token =localStorage.getItem("token");

//     let user = await getRequest();

//     if(user){
//         setIsLoogedIn(true);
//     }

//   }
//     useEffect(() => {
//         getUser()
//     // console.log("users", user)
    
//    },[])
    return(is_logged_in ?component :<Navigate to ="/login"/>)
}

const Routing = () => {
    return (
        // same as react  fragment <></>
        <>
            <BrowserRouter>
                <Routes>
                <Route path="/home" element={<HomePage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    
                    <Route  path="product/:slug" element = {<ProductDetail/>}/>
                    
                    <Route path="/admin" element={<PrivateComponent component={<AdminLayout />}/>}>
                        
                        <Route index element={<AdminDashboard />} />
                        <Route path="user" element = {<UserListPage tittle = "User List"/>}/>
                        <Route path = "banner" element= {<BannerListPage/>}/>
                        <Route path = "banner/create" element = {<BannerCreatePage/>}/>
                        <Route path="banner/:id" element={<BannerEditPage></BannerEditPage>}/>
                        <Route path ="brand" element = {<BrandListPage></BrandListPage>}/>
                        <Route path="brand/create" element={<BrandCreate></BrandCreate>}/>
                        <Route path="brand/:id" element={<BrandEditPage></BrandEditPage>}></Route>
                        <Route path="category" element = {<CategoryListPage></CategoryListPage>}></Route>
                   </Route>
                    <Route path="/customer" element={<PrivateComponent component={<AdminLayout />}/>}>
                    <Route index element={<AdminDashboard />} />
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
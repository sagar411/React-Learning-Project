import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "../../assets/css/styles.css"
import { Outlet } from "react-router-dom"
import { NavTopComponent } from "../../components/cms/nav-top.component"
import { SidebarComponent } from "../../components/cms/sidebar.component"
const AdminLayout = ()=>{
    return (
        <>

        <NavTopComponent/>


        <div id="layoutSidenav">
            <SidebarComponent/>
            <div id="layoutSidenav_content">
                <main>
                    <Outlet/>

                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2022</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        </>
    )
}
export default AdminLayout;
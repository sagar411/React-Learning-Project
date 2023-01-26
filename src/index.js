import ReactDOM from "react-dom/client";
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/home/login.page";
const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<LoginPage></LoginPage>)

// root.render(<HomePage name ="Sagar" counter={()=>{console.log("i am props")}}/>) 
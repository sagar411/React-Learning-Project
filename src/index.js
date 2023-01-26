import ReactDOM from "react-dom/client";
import HomePage from "./pages/home/home.page";
const root =ReactDOM.createRoot(document.getElementById("root"));


root.render(<HomePage name ="Sagar" counter={()=>{console.log("i am props")}}/>) 
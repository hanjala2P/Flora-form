import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Register from "../pages/Register";
import Footer from "../pages/Footer";


const Root = () => {
    return (
        <div>
         <Navbar></Navbar>
         <main className="min-h-screen">
            <Outlet />
         </main>
         <Footer></Footer>
        
        </div>
    );
};

export default Root;
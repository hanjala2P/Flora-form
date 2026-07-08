import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Categories from "../pages/Categories";
import Home from "../Components/Home";
import Test from "../pages/Test";
import Tips from "../pages/Tips";
import ViewDetails from "../pages/ViewDetails";
import AllPlants from "../pages/AllPlants";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home/>,
                loader: () => fetch('/data.json')

            },
            {
                loader: () => fetch('/plantCareTips.json'),
                Component: Tips,

            },
        

            {
                path:'/login',
                Component:Login
            },
            {
                path:'/register',
                Component:Register

            },
            {
                path:'/viewDetails/:id',
                Component:ViewDetails,
                loader: () => fetch('/data.json')
                .then(res => res.json())
                
                
            },
            {
                path:'/allPlants',
                Component:AllPlants,
                loader: () => fetch('/data.json')
                .then(res => res.json())

            }
        ]
    }
]);
export default router;
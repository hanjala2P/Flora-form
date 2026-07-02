import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Categories from "../pages/Categories";
import Home from "../Components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home/>,

            },
            {
                Component: Categories,
                loader: () => fetch('/data.json')
                
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/register',
                Component:Register

            }
        ]
    }
]);
export default router;
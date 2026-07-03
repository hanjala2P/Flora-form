import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Categories from "../pages/Categories";
import Home from "../Components/Home";
import Test from "../pages/Test";


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
          // In your router configuration

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
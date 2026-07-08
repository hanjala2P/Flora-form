import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../Components/Home";
import Tips from "../pages/Tips";
import ViewDetails from "../pages/ViewDetails";
import AllPlants from "../pages/AllPlants";
import WishList from "../pages/WishList";
import PrivateRoute from "../Provider/PrivetRoute";
import Profile from "../pages/Profile";
import AboutUs from "../pages/AboutUs";
import HydrateFallback from "../Components/HydrateFallback";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        HydrateFallback:HydrateFallback,
        errorElement:ErrorPage,
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
                element:(<PrivateRoute>
                    <ViewDetails></ViewDetails>
                </PrivateRoute>),
                loader: () => fetch('/data.json')
                .then(res => res.json())
                
                
            },
            {
                path:'/allPlants',
                element:(
                    <PrivateRoute>
                        <AllPlants></AllPlants>
                    </PrivateRoute>
                ),
                loader: () => fetch('/data.json')
                .then(res => res.json())

            },
            {
                path:'/wishlist',
                element:(
                    <PrivateRoute>
                        <WishList></WishList>
                    </PrivateRoute>
                ),
            },
            {
                path:'/profile',
                element:(
                    <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>
                ),
            },
            {
                path:'/aboutUs',
                element:<AboutUs></AboutUs>
            }

        ]
    }
]);
export default router;
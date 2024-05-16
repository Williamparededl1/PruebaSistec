import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import HotelInfo from "../views/HotelInfo";
import InformacionDB from "../views/InformationDB";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home />

    },
    {
        path:'/info',
        element:<HotelInfo />,
        children:[{
            path:'/info/DB',
            element:<InformacionDB />
        }]

    }
]);

const MyRoutes = () => <RouterProvider  router={router}/>;

export default MyRoutes;


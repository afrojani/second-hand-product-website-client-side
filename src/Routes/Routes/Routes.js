import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../pages/AddProduct/AddProduct";
import AllProducts from "../../pages/Allproducts/AllProducts";
import Blog from "../../pages/Blog/Blog";
import AllBuyers from "../../pages/Dashboard/AllUsers/AllBuyers";
import AllSellers from "../../pages/Dashboard/AllUsers/AllSellers";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
// import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import Myorders from "../../pages/Dashboard/MyOrders/Myorders";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyProducts from "../../pages/MyProducts/MyProducts";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>,
                loader: ({ params }) => fetch(` https://assignment-12-server-car.vercel.app/categories/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <Dashboard></Dashboard>
            // },
            {
                path: '/dashboard/myorders',
                element: <Myorders></Myorders>
            },
            {
                path: '/dashboard/buyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/sellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/users',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
        ]
    },
    {
        path: '*',
        element: <div>
            <img className="w-3/4 h-3/4 mx-auto" src="https://img.freepik.com/premium-vector/404-error-with-character-error-design-template-website_114341-24.jpg?w=2000" alt="" />
        </div>
    }
]);


export default router;
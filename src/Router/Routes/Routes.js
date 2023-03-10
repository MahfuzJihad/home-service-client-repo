import Blog from "../../components/Blog";
import ServicePage from "../../components/ServicePage";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Loggoogle from "../../Pages/Loggoogle";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import ServiceDetails from "../../components/ServiceDetails";
import AddService from "../../Pages/AddService/AddService";
import MyReview from "../../Pages/MyReview/MyReview";

const { createBrowserRouter } = require("react-router-dom");

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
                path: '/servicepage',
                element: <ServicePage></ServicePage>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/google',
                element: <Loggoogle></Loggoogle>
            },
           
        ]

    }
]);


export default router;